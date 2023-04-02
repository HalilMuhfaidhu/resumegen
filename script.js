//alert("loading");
function addNewWEField(){
//console.log("Adding new Field");
    
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter Your Text Here')

    let we0b = document.getElementById('we')
    let weAddButton0b = document.getElementById('weAddButton')

    we0b.insertBefore(newNode, weAddButton0b)
}
function addNewAQField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter Your Text Here')

    let aq0b = document.getElementById('aq')
    let aqAddButton0b = document.getElementById('aqAddButton')

    aq0b.insertBefore(newNode, aqAddButton0b)

}

//generating cv
function generateCV()
{
    //console.log("generating CV")

    let NameField=document.getElementById('NameField').value
    
    let nameT1=document.getElementById('nameT1')

    nameT1.innerHTML=NameField;

    //direct
    document.getElementById('nameT2').innerHTML=NameField;

    //contact
    document.getElementById('contactT').innerHTML=document.getElementById('ContactField').value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById('AddressField').value;

    
    document.getElementById('fbT').innerHTML=document.getElementById('FBField').value;

    
    document.getElementById('instaT').innerHTML=document.getElementById('InstaField').value;

    
    document.getElementById('linkedT').innerHTML=document.getElementById('LinkedINField').value;

    //objective

    document.getElementById('objectiveT').innerHTML=document.getElementById('ObjectiveField').value;

    //work experience

    let wes=document.getElementsByClassName('weField')

    let str=''


    for (let e of wes) {
        str=str+`<li> ${e.value} </li>`
        
    }

    document.getElementById('weT').innerHTML=str

    //academic qualification

    let aqs=document.getElementsByClassName('eqField')

    let str1=''

    for(let e of aqs){
        str1=str1+`<li> ${e.value} </li>`
    }

    document.getElementById('aqT').innerHTML=str1;


}
