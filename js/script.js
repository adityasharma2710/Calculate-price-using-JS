var item = 1; 

function add_fields() {
    item++;
    var objTo = document.getElementById('room_fields')
    var divtest = document.createElement("div");
    divtest.innerHTML = '<div class="label">Item ' + item +':</div><div class="content"><label>Enter title</label><input type="text" ><label>Enter Price</label><input type="number" id="add" name="array[]"></div>';
    
    objTo.appendChild(divtest);
}

function Geeks() { 
    var input = document.getElementsByName('array[]'); 
    sums = 0
    for (var i = 0; i < input.length; i++) { 
        var a = input[i]; 

        sums += +a.value;
    } 

    document.getElementById("par").innerHTML ="Total Price is " + sums; 
    document.getElementById("po").innerHTML = "Output"; 
} 