/**
 * A variable in the global namespace.
 * @var {Array} athletesName - Array to store the athletes name
 */
let athletesName = [];
/**
 * A variable in the global namespace.
 * @var {Array} athletesHeight - Array to store the athletes height
 */
let athletesHeight = [];
/**
 * A variable in the global namespace.
 * @constant {number} maxLength 
 * @type {number}
 * @default [5]
 */
const maxLength = 5;
/**@function AddAthlete 
 * @param {string} name - Athlete's Name
 * @param {string} height - Athelete's Height
 * @returns {string} Return either ‘array is full’ if the number of the inserted athlete is five or ‘added successfully’
 * @description Insert new athlete information in two arrays.
*/
function AddAthlete(name,height)
{
    if(athletesName.length<maxLength)
    {
        athletesName.push(name);
        athletesHeight.push(height);
        return "Added successfully";
    }
    else
    {
        return "Array is Full";
    }
}
/** @function FindAthlete 
 *  @param {number} position - Position where the athlete name is in tha array.
 *  @returns {string} Return the details of athlete found as string.
 *  @description To find an athlete by the position stored in the array.  
*/
function FindAthlete(position){
    if(position>-1 && position<athletesName.length)
    {
        let name = athletesName[position];
        let height = athletesHeight[position];
        return name.concat(" ",height);
    }
    else
    {
        return "Not found";
    } 
}
/** @function DeletedPosition
 *  @param {string} name - Position where the athlete name is in tha array.
 *  @returns {number} Return the position of athlete found in the array, if the information cannot be not found, return -1.
 *  @description To find the position of an athlete in the name array.  
*/
function DeletedPosition(name){
    let deletedPosition = athletesName.indexOf(name);
    return deletedPosition;
}
/** @function RemoveAthlete 
 *  @param {string} name - Name of which athlete user wants to remove from tha array.
 *  @returns {string} Return either ‘not found’ or ‘removed successfully’.
 *  @description To remove an athlete’s information from the two arrays. .  
*/
function RemoveAthlete(name){
    /**
     * A variable in the 'RemoveAthlete' function.
     * @var {number} deletedPosition -  Position of athlete found in the array 
     */
    let deletedPosition= DeletedPosition(name);
    if (deletedPosition<0)
    {
        return "Not found";
    }
    else
    {
        athletesName.splice(deletedPosition,1);
        athletesHeight.splice(deletedPosition,1);
        return "Removed successfully";
    }
}
