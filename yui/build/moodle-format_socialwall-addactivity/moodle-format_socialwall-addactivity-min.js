YUI.add("moodle-format_socialwall-addactivity",function(e,t){M.format_socialwall=M.format_socialwall||{},M.format_socialwall.addactivityinit=function(t){"use strict";function a(){e.one(document.body).appendChild(r),n=new M.core.dialogue({bodyContent:i,width:o,height:u,modal:!0,zIndex:15,visible:!0,render:!0,center:!0});var t={value:M.str.format_socialwall.attach,action:function(e){e.preventDefault(),l(),n.hide()},section:e.WidgetStdMod.FOOTER},s={value:M.str.format_socialwall.cancel,action:function(e){n.hide()},section:e.WidgetStdMod.FOOTER};n.addButton(t),n.addButton(s),n.hide()}function f(n){var r=M.cfg.wwwroot+"/course/format/socialwall/pages/addactivity_ajax.php",i={};i.courseid=t.courseid,i.action="addactivities",i.attachrecentactivitiyids=e.JSON.stringify(n),i.sesskey=M.cfg.sesskey,e.io(r,{data:i})}function l(){s=[];var t=e.one("#attachedrecentactivities");t.setHTML("");var n=e.all('#id_recentactivitiesheader input[name^="module_"]');return n&&n.each(function(n){if(n.get("checked")){var r=n.get("id").split("_")[1],i=e.one('#id_recentactivitiesheader .felement label[for="module_'+r+'"]');if(i===null){i=e.one('#id_recentactivitiesheader .fitem span[data-itemid="'+r+'"]');if(i===null)return M.cfg.developerdebug,!1}var o=e.Node.create("<li></li>"),u=i.cloneNode(!0),a;withboost?(a=e.Node.create('<label for="module_'+r+'"></li>'),o.append(a),a.append(u)):o.append(u),t.append(o),s.push(r)}}),f(s),!0}function c(){var t=e.all('#id_recentactivitiesheader input[name^="module_"]');t&&t.each(function(e){e.set("checked",!1)});if(s)for(var n in s){var r=s[n],i=e.one("#module_"+r);i&&i.set("checked","checked")}}function h(){var t=e.all("#id_recentactivitiesheader div.fitem");t&&t.hide();var n=e.all('#id_filtersheader input[id^="type_"]');return n&&n.each(function(t){if(t.get("checked")){var n=t.get("id").split("_")[1],r=e.all('#id_recentactivitiesheader input[name^="module_'+n+'"]');r&&r.each(function(e){e.ancestor(".fitem").show()})}}),!0}function p(){var e=n.get("boundingBox"),t=e.get("winHeight"),r=e.get("winWidth"),i=Math.min(t,u),s=Math.min(r,o);n.set("height",i),n.set("width",s-120),n.centerDialogue()}function d(t){var n=t.get("value"),r=e.all("#id_recentactivitiesheader div.fitem");if(n.length<3)return r&&r.each(function(e){e.show()}),!1;if(!r)return!1;r.each(function(e){var t=e.one("span.instancename");if(t){var r=t.getContent(),i=r.indexOf(n);r.toUpperCase().indexOf(n.toUpperCase())==-1?e.hide():e.show()}else e.hide()})}function v(){s=t.attachedrecentactivities,r=e.Node.create('<div id="filesskin" class="format_socialwall-addactivity-dialog"></div>'),i=e.one("#tl-addrecentactivity-formwrapper"),r.append(i),a();var o=e.one("#id_filtersheader");o&&o.delegate("click",function(e){h()},'input[id^="type_"]');var u=e.one("#id_searchbyname");u&&u.on("keyup",function(e){d(this)});var f=e.one("#tl-addrecentactivity-text"),l=e.one("#tl-addrecentactivity-link");l.append(f),l.show(),l.on("click",function(e){e.preventDefault(),c(),n.show()}),e.one("window").on("resize",function(e){p()}),e.one("#tl-addrecentactivity-form").on("submit",function(e){return e.preventDefault(),!1})}var n,r,i,s,o=500,u=500;v()}},"@VERSION@",{requires:["base","node","io","moodle-core-notification-dialogue"]});
