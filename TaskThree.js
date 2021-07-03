/**A variable in the global namespace.
 * @var {object[]} athleteArray - Object Array to store the athletes object
 */
let athleteArray = new Array();
/**Class athlete information */
class Athlete{
   /**
    * Storing Athlete details (Name, Height).
    * @constructor
    * @param {string} athleteName - Athlete's Name.
    * @param {number} athleteHeight - Athlete's Height.
    */ 
    constructor(athleteName, athleteHeight){
        this.athleteName= athleteName;
        this.athleteHeight= athleteHeight;
    }
    /**
     * Get the athleteName value.
     * @return {string} The object[].athleteName value.
     */
    get athleteName(){
        return this._athleteName;
    }
    /**
     * Set the athleteName value.
     * @param {string} n - Athlete's Name.
     * @throws will throw an error if argument n is missing.
     * @throws will throw an error if argument n contains less than two characters.
     */
    set athleteName(n){
        if(n==="") throw "Missing athlete name";
        else if(n.length<2) throw "Name must contain at least two characters";
        this._athleteName = n;
    }
     /**
     * Get the athleteHeight value.
     * @return {number} The object[].athleteHeight value.
     */
    get athleteHeight(){
        return this._athleteHeight;
    }
    /**
     * Set the athleteHeight value.
     * @param {number} h - Athlete's Height.
     * @throws will throw an error if argument h is missing.
     * @throws will throw an error if argument h isn't a number.
     * @throws will throw an error if argument h is less than zero.
     */
    set athleteHeight(h){
        if(h==="") throw "Missing athlete height";
        else if(isNaN(h)) throw "Height must be a number";
        else if(h<1) throw "Height must be positive";
        this._athleteHeight = h;
    }
    /**
     * Return athlete details
     * @method showDetails
     * @returns {string} Return athlete's name and height.
     */
    showDetails(){
        return this.athleteName + " " + this.athleteHeight;
    }
}
/**@function Save
 * @description To Store new athlete information in the Object Array 'athleteArray' using 'InsertAthlete' function and passing athlete object, and display the new athlete information.
 */
function Save(){
    try{
        let name, height;
        name = document.getElementById("txtName").value;
        height = document.getElementById("txtHeight").value;
        let athlete= new Athlete(name,height);
        document.getElementById("displayPara").innerHTML+=InsertAthlete(athlete);
    }
    catch(err){
        document.getElementById("displayPara").innerHTML= err;
    }   
}
/**
 * @function InsertAthlete 
 * @param {object} ath - athlete object 
 * @returns {string} -Return a clarification sentence to ensure that the new information is stored successfully in the array or not.
 * @description To Insert and store the new athlete information in athleteArray.
 */
function InsertAthlete(ath){
    /**@constant {object} athlete */
    const athlete = ath;
    if(athleteArray.length<5){
        athleteArray.push(athlete);
        return "<br />"+"New athlete is stored successfully "+ "<br />"+athlete.showDetails();
    }
    else{
        return "Array is Full";
    } 
}
/**@function compare 
 * @param {object} a - first Athlete object in the athleteArray[]
 * @param {object} b - second Athlete object in the athleteArray[]
 * @returns {number} - Return the value of coparison: 1 =>if athleteA'>;athleteB, -1=>if athleteA'<'athleteB, otherwise zero. 
 * @description To Sort the athleteArray.
*/
function compare(a, b) {
    /**@constant {string} athleteA - its value is a.athleteName - the athlete name of a object */
    const athleteA = a.athleteName.toUpperCase();
    /**@constant {string} athleteB - its value is b.athleteName - the athlete name of b object */
    const athleteB = b.athleteName.toUpperCase();
    let comparison = 0;
    if (athleteA > athleteB) {
    comparison = 1;
    } else if (athleteA < athleteB) {
    comparison = -1;
    }
    return comparison;
}
/**
 * To find the position of required athlete by using binary search algorithm in athleteArray[].
 * @function binarySearch
 * @param {Object[]} list - The athleteArray.
 * @param {string} value - The athlete's name that we have to get his position in the array.
 * @returns {number} position value for required athlete, or -1 if tha athlete's name is not found in the athleteArray.
 */
function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle].athleteName == value) {
            found = true;
            position = middle;
        } else if (list[middle].athleteName > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}
/**
 * @function Find
 * @description Display the position of the athlete after implementing binary search function.
 */
function Find(){
    athleteArray.sort(compare);
    let searchName = document.getElementById("txtName").value;
    let posFound = binarySearch(searchName, athleteArray);
    document.getElementById("displayPara").innerHTML += `<br />Athlete: ${searchName} is found in position: ${posFound}`;
}

