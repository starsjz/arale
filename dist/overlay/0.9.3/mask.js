define("#overlay/0.9.3/mask",["$","./overlay"],function(a,b,c){var d=a("$"),e=a("./overlay"),f=(d.browser||0).msie&&d.browser.version==6,g=e.extend({attrs:{opacity:.2,backgroundColor:"#000",template:'<div id="J_mask"></div>',align:{baseElement:f?document.body:undefined,baseXY:[0,0]}},setup:function(){this.element.css({position:f?"absolute":"fixed"})},render:function(){return g.superclass.render.call(this),this.element.hide(),this},show:function(){this._rendered||(this.render(),this._rendered=!0),g.superclass.show.call(this)},_onChangeBackgroundColor:function(a){this.element.css("backgroundColor",a)},_onChangeOpacity:function(a){this.element.css("opacity",a)}}),h;c.exports=function(){return h||(h=new g({width:f?d(document.body).outerWidth(!0):"100%",height:f?d(document.body).outerHeight(!0):"100%"})),h}()});