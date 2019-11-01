/* your javascript goes in this file */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

/** Below you will note our "js-docs" style of comments which will
	explain the needed functionality of the functions included in this file.

	The first function "initiateApp" is completed to show you how the docs are structured.

	Note the explanatory comments on the "initiateApp" js-docs below

**/

 /**
 * initiateApp  - ``This section will contain the name of the function``
 * - This function will:  - ``This section will give an overview of the functionality``.
 * 	- Use the `makeGallery` function to populate the DOM with dynamic `figure` elements with
 *    background images
 *  - Use the addModalCloseHandler to apply a click handler to the modal.
 * ** Specifications ** - ``This section will contain more detailed information on the functions construction
 *                          including parameters``
 * - Takes no parameters
 * - Within the function:
 *   - call the makeGallery function and passes in the pictures array as an argument
 *   - call the addModalCloseHandler function to add a "click" event handler which will
 *     close the modal when the image is clicked.
 * - Considerations - ``This section will give you questions to consider or useful information``
 *   - Why is the pictures array being passed into the "makeGallery" function as an argument?
 *   - Why is the initiateApp function being used to apply the click handler via the
 *     addModalCloseHandler function?
 **/

function initiateApp(){
	/*advanced: add jquery sortable call here to allow resorting of the images
		//on change, rebuild the images array into the newly sorted order
	*/
	makeGallery(pictures);
	addModalCloseHandler();
}

	/**
 * makeGallery
 * - This method will:
 * 	- Create the HTML structures for each image in the gallery.
 *  - Use the image paths located in the `imageArray` parameter as sources for the background images
 *    in the `figure` elements which are created.
 *  - Attach a click handler to the `figure` elements which are created that will call the
 *    `displayImage` function.
 *  - Append the completed `figure` elements to the `section` with the id of `gallery`.
 * ** Specifications **
 * - Takes one parameter:
 *   - imageArray - which will be the `pictures` array that contains all of the image paths.
 * - Within the function:
 *   - Use a for loop to go through the image array
 *   - Within the loop:
 *     - Use jQuery to create the following HTML elements and store them in variables:
 * 	     - a `figure` element with the following attributes:
 *         - class - imageGallery col-xs-12 col-sm-6 col-md-4
 *           - note: the above are CSS and bootstrap classes for styling purposes
 *         - imgPath:
 * 		     - Assign this attribute the path in the array which matches the current index of the loop!
 * 		       - Note: This is a custom attribute you will create in order to store the image path
 *                     which is being used for the background image. You are doing this so when you
 *                     need to update the image in the modal, you can easily retrieve the image path!
 *         - Give the `figure` element a background image:
 *           - Hint: the path for the background image should be the path in the image array
 *             which corresponds to the current index of the loop
 *           - Hint: the jQuery .css() method can be very helpful here!
 *       - a `figureCaption` element with text in it:
 * 			 - the text should be the name of the image which is in the path, but only the image name.
 *             - Example image 'images/landscape-1.jpg'
 *             - Example Title 'landscape-1'
 *           - Hint: The .slice() and .indexOf() methods can be very useful
 *                   as you need to select and save only a part of the paths to get
 *                   title from the path
 *    - Append the `figure` and `figureCaption` elements into the correct HTML structure
 *      - the `figureCaption` is a child of the `figure`
 *    - Add a click handler to the `figure` element which calls the `displayImage` function on click.
 *    - Append the completed HTML structure to the `section` element with the id of `gallery`
 *
 * - Considerations
 *   - How do you use .css() to set the background image property for the `figure` element?
 *     - https://www.w3schools.com/jquery/jquery_css.asp
 *   - How do you use .slice() to select a piece of the path strings and store it to use as the
 *     `figureCaption?
 *     - https://www.w3schools.com/jsref/jsref_slice_string.asp
 *   - How do you use indexOf to find where to use .slice()?
 *     - https://www.w3schools.com/jsref/jsref_indexof.asp
 *   - How do you attach a click handler to an element?
 *     - https://www.w3schools.com/jquery/event_click.asp
 *
 **/

function makeGallery(imageArray){

	}

	/**
 * addModalCloseHandler
 * - This method will:
 *   - Attach a click handler to the to the `img` tag with an id of `modalImage`
 *     and pass it an anonymous function which will target the div with an id of
 *     `galleryModal` and call the .modal() function with the parameter needed to
 *     close the modal.
 * ** Specifications **
 * - Takes no parameters
 * ** Within the function **
 * - Use jQuery to select the `img` tag with the id of 'modalImage`.
 * - Attach a click handler to the selected `img` tag and passes
 *   it an anonymous function as a callback.
 *   - Within the anonymous function:
 *     - Use jQuery to target the `div` with an id of `galleryModal`
 *     - Call the .modal() function on the selected element, and pass
 *       it the argument needed to close the modal.
 * **Considerations**
 * - How do you use jQuery to select an id?
 * - How do you attach a click handler to an element and pass it an anonymous function?
 *   - https://www.w3schools.com/jquery/event_click.asp
 * - What argument do you need to pass in to the .modal() method to close the modal?
 *   - https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp (Check the Modal Methods section)
 */

function addModalCloseHandler(){

}

/**
 * displayImage
 * - This method will:
 *   - Set the text of the modal to match the caption of the image which was clicked on
 *   - Set the `src` of the image tag to be the image path of the image that was clicked on
 *   - Use jQuery to select the div with the id of `galleryModal` and call the .modal() method
 *     with the proper argument to open the modal.
 * ** Specifications **
 * - Takes one parameter - event - which will be the event object which is passed in by jQuery as
 *   an argument when the `displayImage` function is called by the click handler.
 * ** Within the function**
 * - Use jQuery to select the `currentTarget` property on the `event` parameter and save it in a variable.
 *   - Note: The `currentTarget` property on the event object will contain a reference to the
 *           element which was clicked on. This will allow you to target the specific element
 *           which was clicked on so you can retrieve the data you need from it to populate the modal!
 * - Call the .attr() method on the variable which contains the jQuery reference to the element which was
 *   clicked on, and pass it a string as an argument which matches the name of the custom attribute you
 *   saved the image path to in the 'makeGallery' function.
 *   - Store what is returned in a variable named `imagePath`.
 * - Use the .slice() method on the imagePath variable you created in the previous step and select only the
 *   the name of the image (Ex. landscape-15).
 *   - Store this title string in variable named `imageTitle`
 * - Use jQuery to select the `h4` with the class of `modal-title` and update the text to match the
 *   string which is stored in the `imageTitle` variable.
 * - Use jQuery to select the `img` tag with the id of `modal-image` and set the `src` of the `img` tag to the
 *   to the path stored in the `imagePath` variable.
 * - Use jQuery to select the div with the id of `galleryModal` and call the .modal() method
 *   with the proper argument to open the modal.
 * **Considerations**
 * - How do you use the .attr() method to retrieve a value stored in an attribute?
 *   - https://www.w3schools.com/jquery/html_attr.asp
 * - How do you use .slice() to get the image title?
 *   - w3schools.com/jsref/jsref_slice_string.asp
 * - What argument do you have to pass to the .modal() method to open it?
 *   - https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp (Check the Modal Methods section)
 */

function displayImage(){

}
