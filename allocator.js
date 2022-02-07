// CHALLENGE #1
// Create Class for ID allocator that can allocate and release IDs

class Allocator {

    constructor(max_value){
        this.current_id = 1;
        this.max_value = max_value;
        this.available_ids = [];
    }

    allocate(){
        if(this.current_id <= this.max_value){
            let result = this.current_id;
            this.current_id += 1;
            return result;
        }else if(this.available_ids.length > 0){
            let result = this.available_ids.shift();
            return result;
        }else{
            console.error('Error: No ID to allocate!')
        }
    }

    release(num){
        if(num < 1 || num > this.max_value || this.available_ids.includes(num)){
            console.error('Cannot release ID');
            return this.available_ids;
        }else{
            this.available_ids.push(num);
            console.log('ID released!');
            return this.available_ids;
        }
    }

}

let a = new Allocator(10);
console.log(`Max Value of Allocator: ${a.max_value}`);
console.log(`Latest available id: ${a.current_id}`);

for(let i = 1; i <= 12; i++){
    console.log(`ID Allocated: ${a.allocate()}`);
}

console.log(`Released IDs: ${a.release(1)}`);
console.log(`Released IDs: ${a.release(10)}`);
console.log(`Released IDs: ${a.release(5)}`);
console.log(`Released IDs: ${a.release(20)}`);
console.log(`Released IDs: ${a.release(3)}`);

for(let i = 1; i <= 2; i++){
    console.log(`ID Allocated: ${a.allocate()}`);
}

console.log(`Released IDs: ${a.release(20)}`);
