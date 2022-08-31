// use std::str::FromStr;
use std::{collections::HashMap};
use rusqlite::{Connection, Result};
// use rusqlite::NO_PARAMS;
// use std::io::Read;

fn main() {
    let action = std::env::args().nth(1).expect("Please specify an action");
    let item = std::env::args().nth(2).expect("Please specify an item");

    println!("{:?}, {:?}", action, item);
    let mut todo = Todo::new().expect("Initialisation of todo failed");

    if action == "add" {
        // TODO add HashMap instead of inputs
        // Call a function in main, instead of this
        let conn = Connection::open("todo.db").unwrap();

        let input3 = 0;
        conn.execute(
            "create table if not exists todo_table (
                id integer primary key,
                todo text,
                completed integer
            )",
            ([]),
        ).unwrap();

        conn.execute(
            "INSERT INTO todo_table (todo, completed) values (?1, ?2)",
            ([&item, &input3.to_string()]),
        ).unwrap();
        todo.insert(item);
        match todo.save() {
            Ok(_) => println!("todo saved"),
            Err(why) => println!("An error occurred: {}", why),
        }
    } else if action == "complete" {
        // TODO add HashMap instead of inputs
        // Call a function in main, instead of this
        let conn = Connection::open("todo.db").unwrap();
        conn.execute(
            "create table if not exists todo_table (
                id integer primary key,
                todo text,
                completed integer
            )",
            ([]),
        ).unwrap();

        conn.execute(
            "UPDATE todo_table SET completed = 1 WHERE todo = (?1)",
            ([&item]),
        ).unwrap();
        match todo.complete(&item) {
            None => println!("'{}' is not present in the list", item),
            Some(_) => match todo.save() {
                Ok(_) => println!("todo saved"),
                Err(why) => println!("An error occurred: {}", why),
            },
        }
    };
    
}

#[derive(Debug)]
struct Todo {
    // use rust built in HashMap to store key - val pairs
    map: HashMap<String, bool>,
}

// TODO implement iterator trait for TODO and iterate over the HashMap when interacting with sqlite
// impl Iterator for Todo {
//     type Item = String;
// }

impl Todo {
    // JSON
    fn new() -> Result<Todo, std::io::Error> {
        // open db.json
        let f = std::fs::OpenOptions::new()
            .write(true)
            .create(true)
            .read(true)
            .open("db.json")?;
        // serialize json as HashMap
        match serde_json::from_reader(f) {
            Ok(map) => Ok(Todo { map }),
            Err(e) if e.is_eof() => Ok(Todo {
                map: HashMap::new(),
            }),
            Err(e) => panic!("An error occurred: {}", e),
        }
    }

    // db.txt
    // This bit of code demonstrates two examples of how you can 
    //write to a txt file instead of to a json or sqlite

    // 1
    // fn new() -> Result<Todo, std::io::Error> {
    //     let mut f = std::fs::OpenOptions::new()
    //         .write(true)
    //         .create(true)
    //         .read(true)
    //         .open("db.txt")?;
    //     let mut content = String::new();
    //     f.read_to_string(&mut content)?;
    //     let map: HashMap<String, bool> = content
    //         .lines()
    //         .map(|line| line.splitn(2, '\t').collect::<Vec<&str>>())
    //         .map(|v| (v[0], v[1]))
    //         .map(|(k, v)| (String::from(k), bool::from_str(v).unwrap()))
    //         .collect();
    //     Ok(Todo { map })
    // }

    // 2
    // fn new() -> Result<Todo, std::io::Error> {
    //     // open the db file
    //     let mut f = std::fs::OpenOptions::new()
    //         .write(true)
    //         .create(true)
    //         .read(true)
    //         .open("db.txt")?;
    //     // read its content into a new string
    //     let mut content = String::new();
    //     f.read_to_string(&mut content)?;

    //     // allocate an empty HashMap
    //     let mut map = HashMap::new();

    //     // loop over each lines of the file
    //     for entries in content.lines() {
    //         // split and bind values
    //         let mut values = entries.split('\t');
    //         let key = values.next().expect("No Key");
    //         let val = values.next().expect("No Value");
    //         // insert them into HashMap
    //         map.insert(String::from(key), bool::from_str(val).unwrap());
    //     }
    //     // Return Ok
    //     Ok(Todo { map })
    // }

    fn insert(&mut self, key: String) {
        // insert a new item into our map.
        // we pass true as value.
        self.map.insert(key, true);
    }

    // JSON
    fn save(self) -> Result<(), Box<dyn std::error::Error>> {
        // open db.json
        let f = std::fs::OpenOptions::new()
            .write(true)
            .create(true)
            .open("db.json")?;
        // write to file with serde
        serde_json::to_writer_pretty(f, &self.map)?;
        Ok(())
    }

    // save to db.txt instead of JSON
    // fn save(self) -> Result<(), std::io::Error> {
    //     let mut content = String::new();
    //     for (k, v) in self.map {
    //         let record = format!("{}\t{}\n", k, v);
    //         content.push_str(&record)
    //     }
    //     std::fs::write("db.txt", content)
    // }

    fn complete(&mut self, key: &String) -> Option<()> {
        match self.map.get_mut(key) {
            Some(v) => Some(*v = false),
            None => None,
        }
    }
}
