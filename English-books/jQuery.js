***jQuery***
*A Brief Look
	- DOM Traversal and Manipulation
	- Event Handling
	- Ajax
**Learning Center**
*Chapters*
	- About jQuery
		-How jQuery Works
			-jQuery: The Basics
			-Launching Code on Document Ready
				- window.onload
				- $(document).ready 
			-Complete Example
			-Adding and Removing an HTML Class
				-$ele.addClass()
				-$ele.removeClass()
			-Special Effects
				-$ele.hide()
		-Callbacks and Functions		//executed at a later time - async
			-Callback without Arguments
				-$.get('',callback)
			-Callback with Arguments		//the anonymous function wrap callback
		-Additional jQuery Support
	- Using jQuery Core
		-$ vs $()		
			-$() 	//$.fn  this
			-$		//utility-type	vary
		-$( document ).ready()
			-window/load		//images or iframes
			-Shorthand 		//$()
		-Avoiding Conflicts with Other Libraries
			-Putting jQuery Into No-Conflict Mode		//$j = jQuery.noConflict()
			-$ as an argument 
			-Including jQuery Before Other Libraries
			-Summary of Ways to Reference the jQuery Function
				-Create a New Alias
				-Use an Immediately Invoked Function Expression
				-Use the Argument That's Passed to the jQuery( document ).ready() Function
		-Attributes
			-The .attr() method
				-setter
				-getter
		-Selecting Elements
			-Choosing Selectors
			-Saving Selections
			-Refining & Filtering Selections
			-Selecting Form Elements
		-Working with Selections
			-Getters & Setters
				-all/first	except text()
				-return $ object/value
				-Chaining
		-Manipulating Elements
			-Getting and Setting Information About Elements
			-Moving, Copying, and Removing Elements		//initiative - passive
			-Cloning Elements					//.clone()
			-Removing Elements				//.remove()  .clone()    .empty()
			-Creating New Elements
				-$()		
				-string/attribute object
				-reserved words 
				-huge performance cost
			-Manipulating Attributes
				-single 
				-multiple
				-function 
		-The jQuery Object
			-DOM and DOM Elements
			-The jQuery Object
				-Compatibility 
				-Convenience 
			-Getting Elements Into the jQuery Object
				-length
				-eq
				-get
				-bracket
			-Not All jQuery Objects are Created
				-not the same jQuery object   / the same DOM element
				-convention		/$obj
			-jQuery Objects Are Not "Live"
				-only updated by create a new one
			-Wrapping Up
		-Traversing
			-three basic parts
			-Parents		
				-.parent() 
				-.parents() 
				-.parentsUntil()		//up to, not including
				-.closest()		//include itself 
			-Children		
				-.children() 		//direct child
				-.find()		//traverse recursively 
			-Siblings
				-.prev() .next() .siblings()
				-.nextAll() .nextUntil() .prevAll() .prevUntil()
		-CSS, Styling, & Dimensions
			-.css()		//individual/multiple 
			-Using CSS Classes for Styling
				-addClass() removeClass() toggleClass() hasClass()
			-Dimensions
				-width/height/position() 
		-Data Methods
			-.data()		//manages the memory(memory leaks)
			-store element	//relationship  pointer 
		-Utility Methods
			-$ namespace
				-trim 
				-each(key-value) 
				-inArray(value,array)
				-extend		//first empty 
				-proxy		//return function, (function,object), (object,'functionName')
		-Testing Type
			-$.type()		//return string for internal class
		-Iterating over jQuery and non-jQuery Objects
			-$.each()		// for plain construction
			-.each()		//callback(index, element), this - current matched element
				-The Second Argument	//this === it , 'this' change in other scope
				-Sometimes .each() Isn't Necessary	
					-iterate over the collection	//val() only use in .eq().val('')
					-require .each()
						-attr css data height ...		//getter only first , except .text()
					-accept anonymous callback 
						-attribute(html), property(js), CSS setters, and DOM insertion 
			-.map()
				-$.map()		//return array
				-.map()		//.get()
		-Using jQuery��s .index() Function
			-.index() with No Arguments		// within its parent
			-.index() with a String Argument
				-query all .index() DOM 
				-check jQ object's index
			-.index() with a jQuery Object Argument
				-index: index()'s jQ's index in left jQ
			-.index() with a DOM Element Argument
				-similar to up(dom in ())
		-Frequently Asked Questions
			-How do I select an item using class or ID?
			-How do I select elements when I already have a DOM element?
			-How do I test whether an element has a particular class?
			-How do I test whether an element exists?
			-How do I determine the state of a toggled element?
			-How do I select an element by an ID that has characters used in CSS notation?
			-How do I disable/enable a form element?		//prop
			-How do I check/uncheck a checkbox input or radio button?	//prop
			-How do I get the text value of a selected option?	//select-option
			-How do I replace text from the 3rd element of a list of 10 items?	//eq,text
			-How do I pull a native DOM element from a jQuery object?
	- Events
		-jQuery Event Basics
			-Setting Up Event Responses on DOM Elements
			-Extending Events to New Page Elements		//on delegate 
			-Inside the Event Handler Function
				-the event object 	//pageX, pageY, type, which, data, target, preventDefault...
			-Setting Up Multiple Event Responses	//space-separated, key/value
			-Namespacing Events
			-Tearing Down Event Listeners  //off, named function 
			-Setting Up Events to Run Only Once  //one, multiple events