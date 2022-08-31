// use std::str::FromStr;
use std::{collections::HashMap};
use rusqlite::{Connection, Result};
use rusqlite::NO_PARAMS;
// use std::io::Read;

fn main() {
    let action = std::env::args().nth(1).expect("Please specify an action");
    let item = std::env::args().nth(2).expect("Please specify an item");

    println!("{:?}, {:?}", action, item);

    let mut todo = Todo::new().expect("Initialisation of todo failed");

    if action == "add" {
        todo.insert(item);
        match todo.save() {
            Ok(_) => println!("todo saved"),
            Err(why) => println!("An error occurred: {}", why),
        }
    } else if action == "complete" {
        match todo.complete(&item) {
            None => println!("'{}' is not present in the list", item),
            Some(_) => match todo.save() {
                Ok(_) => println!("todo saved"),
                Err(why) => println!("An error occurred: {}", why),
            },
        }
    };

    // for (key, value) in &todo {
    //     println!("{}: {}", key, value);
    // }

    sqlite();
    
}

fn sqlite() -> Result<()> {
    let conn = Connection::open("rust.db")?;

    conn.execute(
        "create table if not exists test_table (
             id integer primary key,
             column1 text
         )",
         ([]),
    )?;

    Ok(())
}

#[derive(Debug)]
struct Todo {
    // use rust built in HashMap to store key - val pairs
    map: HashMap<String, bool>,
}

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

    // db.txt
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
