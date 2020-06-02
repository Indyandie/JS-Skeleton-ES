/** 
 * A class containing the X and Y position of a 2D point
 * @memberof JS-Skeleton-ES
*/
class Point {
	/**
	 * 
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor(x,y){
	this.position = [x,y]
	}

	/**
	 *Get position of Point
	 *@return {(number|Array)} 
	 */
	getPosition(){
		return this.position
	}

}
export default Point
