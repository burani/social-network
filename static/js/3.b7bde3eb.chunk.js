(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{294:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2kzfT",profilePhoto:"ProfileInfo_profilePhoto__sqOY2",buttonContainer:"ProfileInfo_buttonContainer__3dQIR",profileInfo:"ProfileInfo_profileInfo__2sCYr"}},295:function(e,t,a){},296:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3DUsT",posts:"MyPosts_posts__1LNB7"}},297:function(e,t,a){e.exports={item:"Post_item__2Qq05"}},298:function(e,t,a){"use strict";a.r(t);var n=a(28),o=a(29),r=a(31),l=a(30),i=a(0),s=a.n(i),c=a(90),u=(a(295),a(296)),p=a.n(u),m=a(297),f=a.n(m),d=function(e){return s.a.createElement("div",{className:f.a.item},s.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"like")," ",e.likesCount))},b=a(124),E=a(125),h=a(55),v=a(89),g=Object(h.a)(100),k=Object(v.a)("textarea"),P=Object(E.a)({form:"profilePost"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(b.a,{name:"post",component:k,placeholder:"Enter you new post here",validate:[g,h.b]}),s.a.createElement("span",null,s.a.createElement("button",null,"Add post")))})),O=function(e){var t=e.profilePage.posts.map((function(e){return s.a.createElement(d,{message:e.message,likesCount:e.likesCount})}));return s.a.createElement("div",{className:p.a.postsBlock},s.a.createElement("h3",null,"My posts"),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(P,{onSubmit:function(t){e.addPost(t.post)},profilePage:e.profilePage}))),s.a.createElement("div",{className:p.a.posts},t))},j=a(7),y=a.n(j),I=a(4),_=a(12),S=a(126),C=a(294),M=a.n(C),A=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1,status:e.props.status},e.enableEditMode=function(){e.setState({editMode:!0})},e.disableEditMode=function(){e.setState({editMode:!1}),e.props.updateProfileStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.target.value})},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.state.editMode?s.a.createElement("span",{onBlur:this.disableEditMode},s.a.createElement("input",{onChange:this.onStatusChange,autoFocus:!0,type:"text",value:this.state.status})):s.a.createElement("span",null,s.a.createElement("span",{onDoubleClick:this.enableEditMode},this.props.status||"------")))}}]),a}(s.a.Component),w=a(92),J=a.n(w),N=a(49),F=a.n(N),x=Object(v.a)("input"),B=Object(v.a)("textarea"),D=Object(E.a)({form:"profiledata"})((function(e){return console.log(e.error),s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("button",null,"Submit"),e.error?s.a.createElement("div",{className:F.a.formSummaryError},e.error):"",s.a.createElement("div",null,s.a.createElement("b",null,"Username: "),s.a.createElement(b.a,{placeholder:"fullName",name:"fullName",component:x,validate:[]})),s.a.createElement("div",null,s.a.createElement("b",null,"About me:"),s.a.createElement(b.a,{placeholder:"aboutMe",name:"aboutMe",component:B,validate:[]})),s.a.createElement("div",null,s.a.createElement("b",null,"Looking for a job:"),s.a.createElement(b.a,{placeholder:"lookingForAJob",name:"lookingForAJob",component:"input",type:"checkbox"})),s.a.createElement("div",null,s.a.createElement("b",null,"Job description: "),s.a.createElement(b.a,{placeholder:"lookingForAJobDescription",name:"lookingForAJobDescription",component:B,validate:[]})),s.a.createElement("h2",null,"Contacts"),Object.keys(e.profile.contacts).map((function(e){return s.a.createElement("div",null,s.a.createElement("b",null,e),": ",s.a.createElement(b.a,{placeholder:e,name:"contacts."+e,component:x,validate:[]}))})))})),U=function(e){var t=!Object.values(e.profile.contacts).every((function(e){return null===e||""===e}));return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("b",null,"Username: "),e.profile.fullName),e.profile.aboutMe&&s.a.createElement("div",null,s.a.createElement("b",null,"About me: "),e.profile.aboutMe),e.profile.lookingForAJob&&s.a.createElement("div",null,s.a.createElement("b",null,"Looking for a job: "),e.profile.lookingForAJob?"yes":"no"),e.profile.lookingForAJob&&s.a.createElement("div",null,s.a.createElement("b",null,"Job description: "),e.profile.lookingForAJobDescription),s.a.createElement("h2",null,"Contacts"),t?s.a.createElement(L,{contacts:e.profile.contacts}):"Information is absent")},z=function(e){var t=Object(i.useState)(!1),a=Object(S.a)(t,2),n=a[0],o=a[1],r=function(){var t=Object(_.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(I.a)(Object(I.a)({},e.profile),a),t.next=3,e.updateProfileInfo(n);case 3:t.sent&&o(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement("div",{className:M.a.profileInfo},s.a.createElement("div",{className:M.a.descriptionBlock},s.a.createElement("img",{src:e.profile.photos.large||J.a,className:M.a.profilePhoto}),e.isOwner&&s.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&e.updatePhoto(t.target.files[0])}}),s.a.createElement("div",null,s.a.createElement("b",null,"Status: "),s.a.createElement(A,e)),s.a.createElement("div",{className:M.a.buttonContainer},s.a.createElement("h2",null,"Profile info"),e.isOwner&&!n&&s.a.createElement("button",{onClick:function(){o(!0)}},"edit")),n?s.a.createElement(D,{onSubmit:r,initialValues:e.profile,profile:e.profile}):s.a.createElement(U,{profile:e.profile})))},L=function(e){var t=e.contacts;return s.a.createElement("div",null,Object.keys(t).map((function(e){if(t[e])return s.a.createElement("div",null,s.a.createElement("b",null,e,": "),t[e])})))},q=a(14),Q=Object(q.b)((function(e){return{profilePage:e.profilePage}}),{addPost:c.a})(O),T=a(36),Y=function(e){return e.profile?s.a.createElement("div",null,s.a.createElement(z,e),s.a.createElement(Q,null)):s.a.createElement(T.a,null)},R=a(10),V=a(136),G=a(8),H=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getProfileInfo()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props.match.params.userId;e.match.params.userId!==a&&this.getProfileInfo()}},{key:"getProfileInfo",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.setProfileInfo(e),this.props.getProfileStatus(e)}},{key:"render",value:function(){return s.a.createElement(Y,Object.assign({},this.props,{profile:this.props.profile,isOwner:!this.props.match.params.userId}))}}]),a}(s.a.Component);t.default=Object(G.d)(V.a,Object(q.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{setProfileInfo:c.d,getProfileStatus:c.c,updateProfileStatus:c.g,updatePhoto:c.e,updateProfileInfo:c.f}),R.f)(H)}}]);
//# sourceMappingURL=3.b7bde3eb.chunk.js.map