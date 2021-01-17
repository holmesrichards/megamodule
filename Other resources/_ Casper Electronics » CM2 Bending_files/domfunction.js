var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// DF1.1 :: domFunction 
// *****************************************************
// DOM scripting by brothercake -- http://www.brothercake.com/
// GNU Lesser General Public License -- http://www.gnu.org/licenses/lgpl.html
//******************************************************




//DOM-ready watcher
function domFunction(f, a)
{
	//initialise the counter
	var n = 0;
	
	//start the timer
	var t = setInterval(function()
	{
		//continue flag indicates whether to continue to the next iteration
		//assume that we are going unless specified otherwise
		var c = true;

		//increase the counter
		n++;
	
		//if DOM methods are supported, and the body element exists
		//(using a double-check including document.body, for the benefit of older moz builds [eg ns7.1] 
		//in which getElementsByTagName('body')[0] is undefined, unless this script is in the body section)
		if(typeof document.getElementsByTagName != 'undefined' && (document.getElementsByTagName('body')[0] != null || document.body != null))
		{
			//set the continue flag to false
			//because other things being equal, we're not going to continue
			c = false;

			//but ... if the arguments object is there
			if(typeof a == 'object')
			{
				//iterate through the object
				for(var i in a)
				{
					//if its value is "id" and the element with the given ID doesn't exist 
					//or its value is "tag" and the specified collection has no members
					if
					(
						(a[i] == 'id' && document.getElementById(i) == null)
						||
						(a[i] == 'tag' && document.getElementsByTagName(i).length < 1)
					) 
					{ 
						//set the continue flag back to true
						//because a specific element or collection doesn't exist
						c = true; 

						//no need to finish this loop
						break; 
					}
				}
			}

			//if we're not continuing
			//we can call the argument function and clear the timer
			if(!c) { f(); clearInterval(t); }
		}
		
		//if the timer has reached 60 (so timeout after 15 seconds)
		//in practise, I've never seen this take longer than 7 iterations [in kde 3 
		//in second place was IE6, which takes 2 or 3 iterations roughly 5% of the time]
		if(n >= 60)
		{
			//clear the timer
			clearInterval(t);
		}
		
	}, 250);
};





}
/*
     FILE ARCHIVED ON 20:25:29 Mar 25, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:21:40 Jun 14, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  xauthn.chkprivs: 0.038
  exclusion.robots.policy: 148.667
  load_resource: 1176.835
  xauthn.identify: 148.428
  esindex: 0.011
  captures_list: 350.405
  PetaboxLoader3.datanode: 611.964 (5)
  CDXLines.iter: 10.489 (3)
  LoadShardBlock: 159.787 (3)
  RedisCDXSource: 28.419
  exclusion.robots: 148.678
  PetaboxLoader3.resolve: 169.67 (4)
*/