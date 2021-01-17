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

var ak_js = document.getElementById( "ak_js" );

if ( ! ak_js ) {
	ak_js = document.createElement( 'input' );
	ak_js.setAttribute( 'id', 'ak_js' );
	ak_js.setAttribute( 'name', 'ak_js' );
	ak_js.setAttribute( 'type', 'hidden' );
}
else {
	ak_js.parentNode.removeChild( ak_js );
}

ak_js.setAttribute( 'value', ( new Date() ).getTime() );

var commentForm = document.getElementById( 'commentform' );

if ( commentForm ) {
	commentForm.appendChild( ak_js );
}
else {
	var replyRowContainer = document.getElementById( 'replyrow' );

	if ( replyRowContainer ) {
		var children = replyRowContainer.getElementsByTagName( 'td' );

		if ( children.length > 0 ) {
			children[0].appendChild( ak_js );
		}
	}
}

}
/*
     FILE ARCHIVED ON 09:27:53 Aug 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:21:39 Jun 14, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 10.394 (3)
  PetaboxLoader3.resolve: 21.603
  xauthn.identify: 112.926
  PetaboxLoader3.datanode: 181.83 (4)
  xauthn.chkprivs: 0.054
  captures_list: 250.563
  load_resource: 92.392
  LoadShardBlock: 123.084 (3)
  RedisCDXSource: 0.752
  esindex: 0.027
  exclusion.robots: 113.265
  exclusion.robots.policy: 113.248
*/