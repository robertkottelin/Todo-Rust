(function() {var implementors = {};
implementors["fallible_iterator"] = [{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"fallible_iterator/struct.Iterator.html\" title=\"struct fallible_iterator::Iterator\">Iterator</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fallible_iterator/trait.FallibleIterator.html\" title=\"trait fallible_iterator::FallibleIterator\">FallibleIterator</a>,&nbsp;</span>","synthetic":false,"types":["fallible_iterator::Iterator"]}];
implementors["hashbrown"] = [{"text":"impl&lt;K, V, A:&nbsp;Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.IntoKeys.html\" title=\"struct hashbrown::hash_map::IntoKeys\">IntoKeys</a>&lt;K, V, A&gt;","synthetic":false,"types":["hashbrown::map::IntoKeys"]},{"text":"impl&lt;K, V, A:&nbsp;Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.IntoValues.html\" title=\"struct hashbrown::hash_map::IntoValues\">IntoValues</a>&lt;K, V, A&gt;","synthetic":false,"types":["hashbrown::map::IntoValues"]},{"text":"impl&lt;K, V, F, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.DrainFilter.html\" title=\"struct hashbrown::hash_map::DrainFilter\">DrainFilter</a>&lt;'_, K, V, F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/core/primitive.reference.html\">&amp;</a>K, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/core/primitive.reference.html\">&amp;mut </a>V) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/core/primitive.bool.html\">bool</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::map::DrainFilter"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.Iter.html\" title=\"struct hashbrown::hash_map::Iter\">Iter</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashbrown::map::Iter"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.IterMut.html\" title=\"struct hashbrown::hash_map::IterMut\">IterMut</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashbrown::map::IterMut"]},{"text":"impl&lt;K, V, A:&nbsp;Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.IntoIter.html\" title=\"struct hashbrown::hash_map::IntoIter\">IntoIter</a>&lt;K, V, A&gt;","synthetic":false,"types":["hashbrown::map::IntoIter"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.Keys.html\" title=\"struct hashbrown::hash_map::Keys\">Keys</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashbrown::map::Keys"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.Values.html\" title=\"struct hashbrown::hash_map::Values\">Values</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashbrown::map::Values"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.ValuesMut.html\" title=\"struct hashbrown::hash_map::ValuesMut\">ValuesMut</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashbrown::map::ValuesMut"]},{"text":"impl&lt;'a, K, V, A:&nbsp;Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.Drain.html\" title=\"struct hashbrown::hash_map::Drain\">Drain</a>&lt;'a, K, V, A&gt;","synthetic":false,"types":["hashbrown::map::Drain"]},{"text":"impl&lt;'a, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.Iter.html\" title=\"struct hashbrown::hash_set::Iter\">Iter</a>&lt;'a, K&gt;","synthetic":false,"types":["hashbrown::set::Iter"]},{"text":"impl&lt;K, A:&nbsp;Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.IntoIter.html\" title=\"struct hashbrown::hash_set::IntoIter\">IntoIter</a>&lt;K, A&gt;","synthetic":false,"types":["hashbrown::set::IntoIter"]},{"text":"impl&lt;K, A:&nbsp;Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.Drain.html\" title=\"struct hashbrown::hash_set::Drain\">Drain</a>&lt;'_, K, A&gt;","synthetic":false,"types":["hashbrown::set::Drain"]},{"text":"impl&lt;K, F, A:&nbsp;Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.DrainFilter.html\" title=\"struct hashbrown::hash_set::DrainFilter\">DrainFilter</a>&lt;'_, K, F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/core/primitive.reference.html\">&amp;</a>K) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.61.0/core/primitive.bool.html\">bool</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::DrainFilter"]},{"text":"impl&lt;'a, T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.Intersection.html\" title=\"struct hashbrown::hash_set::Intersection\">Intersection</a>&lt;'a, T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::Intersection"]},{"text":"impl&lt;'a, T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.Difference.html\" title=\"struct hashbrown::hash_set::Difference\">Difference</a>&lt;'a, T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::Difference"]},{"text":"impl&lt;'a, T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.SymmetricDifference.html\" title=\"struct hashbrown::hash_set::SymmetricDifference\">SymmetricDifference</a>&lt;'a, T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::SymmetricDifference"]},{"text":"impl&lt;'a, T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.Union.html\" title=\"struct hashbrown::hash_set::Union\">Union</a>&lt;'a, T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::Union"]}];
implementors["hashlink"] = [{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_map/struct.Iter.html\" title=\"struct hashlink::linked_hash_map::Iter\">Iter</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashlink::linked_hash_map::Iter"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_map/struct.IterMut.html\" title=\"struct hashlink::linked_hash_map::IterMut\">IterMut</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashlink::linked_hash_map::IterMut"]},{"text":"impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_map/struct.IntoIter.html\" title=\"struct hashlink::linked_hash_map::IntoIter\">IntoIter</a>&lt;K, V&gt;","synthetic":false,"types":["hashlink::linked_hash_map::IntoIter"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_map/struct.Drain.html\" title=\"struct hashlink::linked_hash_map::Drain\">Drain</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashlink::linked_hash_map::Drain"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_map/struct.Keys.html\" title=\"struct hashlink::linked_hash_map::Keys\">Keys</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashlink::linked_hash_map::Keys"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_map/struct.Values.html\" title=\"struct hashlink::linked_hash_map::Values\">Values</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashlink::linked_hash_map::Values"]},{"text":"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_map/struct.ValuesMut.html\" title=\"struct hashlink::linked_hash_map::ValuesMut\">ValuesMut</a>&lt;'a, K, V&gt;","synthetic":false,"types":["hashlink::linked_hash_map::ValuesMut"]},{"text":"impl&lt;'a, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_set/struct.Iter.html\" title=\"struct hashlink::linked_hash_set::Iter\">Iter</a>&lt;'a, K&gt;","synthetic":false,"types":["hashlink::linked_hash_set::Iter"]},{"text":"impl&lt;K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_set/struct.IntoIter.html\" title=\"struct hashlink::linked_hash_set::IntoIter\">IntoIter</a>&lt;K&gt;","synthetic":false,"types":["hashlink::linked_hash_set::IntoIter"]},{"text":"impl&lt;'a, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_set/struct.Drain.html\" title=\"struct hashlink::linked_hash_set::Drain\">Drain</a>&lt;'a, K&gt;","synthetic":false,"types":["hashlink::linked_hash_set::Drain"]},{"text":"impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_set/struct.Intersection.html\" title=\"struct hashlink::linked_hash_set::Intersection\">Intersection</a>&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["hashlink::linked_hash_set::Intersection"]},{"text":"impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_set/struct.Difference.html\" title=\"struct hashlink::linked_hash_set::Difference\">Difference</a>&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["hashlink::linked_hash_set::Difference"]},{"text":"impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_set/struct.SymmetricDifference.html\" title=\"struct hashlink::linked_hash_set::SymmetricDifference\">SymmetricDifference</a>&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["hashlink::linked_hash_set::SymmetricDifference"]},{"text":"impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"hashlink/linked_hash_set/struct.Union.html\" title=\"struct hashlink::linked_hash_set::Union\">Union</a>&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["hashlink::linked_hash_set::Union"]}];
implementors["rusqlite"] = [{"text":"impl&lt;T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rusqlite/struct.MappedRows.html\" title=\"struct rusqlite::MappedRows\">MappedRows</a>&lt;'_, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;<a class=\"struct\" href=\"rusqlite/struct.Row.html\" title=\"struct rusqlite::Row\">Row</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"rusqlite/type.Result.html\" title=\"type rusqlite::Result\">Result</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["rusqlite::row::MappedRows"]},{"text":"impl&lt;T, E, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rusqlite/struct.AndThenRows.html\" title=\"struct rusqlite::AndThenRows\">AndThenRows</a>&lt;'_, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"rusqlite/enum.Error.html\" title=\"enum rusqlite::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;<a class=\"struct\" href=\"rusqlite/struct.Row.html\" title=\"struct rusqlite::Row\">Row</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"rusqlite/type.Result.html\" title=\"type rusqlite::Result\">Result</a>&lt;T, E&gt;,&nbsp;</span>","synthetic":false,"types":["rusqlite::row::AndThenRows"]},{"text":"impl&lt;'conn&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"rusqlite/struct.Batch.html\" title=\"struct rusqlite::Batch\">Batch</a>&lt;'conn, '_&gt;","synthetic":false,"types":["rusqlite::Batch"]}];
implementors["serde_json"] = [{"text":"impl&lt;'de, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/struct.StreamDeserializer.html\" title=\"struct serde_json::StreamDeserializer\">StreamDeserializer</a>&lt;'de, R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"serde_json/de/trait.Read.html\" title=\"trait serde_json::de::Read\">Read</a>&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["serde_json::de::StreamDeserializer"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Iter.html\" title=\"struct serde_json::map::Iter\">Iter</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::Iter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IterMut.html\" title=\"struct serde_json::map::IterMut\">IterMut</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::IterMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IntoIter.html\" title=\"struct serde_json::map::IntoIter\">IntoIter</a>","synthetic":false,"types":["serde_json::map::IntoIter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Keys.html\" title=\"struct serde_json::map::Keys\">Keys</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::Keys"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Values.html\" title=\"struct serde_json::map::Values\">Values</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::Values"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.ValuesMut.html\" title=\"struct serde_json::map::ValuesMut\">ValuesMut</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::ValuesMut"]}];
implementors["smallvec"] = [{"text":"impl&lt;'a, T:&nbsp;'a + <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"smallvec/struct.Drain.html\" title=\"struct smallvec::Drain\">Drain</a>&lt;'a, T&gt;","synthetic":false,"types":["smallvec::Drain"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.61.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"smallvec/struct.IntoIter.html\" title=\"struct smallvec::IntoIter\">IntoIter</a>&lt;A&gt;","synthetic":false,"types":["smallvec::IntoIter"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()