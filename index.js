fetch('http://localhost:3000/monsters/')
.then(resp => resp.json())
.then(data => testFetch(data))

function testFetch (data) {
    console.log(data[0])
}