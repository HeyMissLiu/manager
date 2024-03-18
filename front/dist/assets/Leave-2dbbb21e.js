import{b as u,r as M,l as re,c as i,o as k,d as E,e as d,f as e,w as a,m as T,t as J,i as N,h as m,F as ie,n as ue,q as R,s as de,x as v,g as f,E as S}from"./index-d2e98233.js";const pe={class:"leave-manager"},me={class:"query-form"},ce={class:"base-table"},_e={class:"action"},fe={class:"dialog-footer"},ve={class:"dialog-footer"},ye={__name:"Leave",setup(ge){const z=u(),V=u();u();let c=u({});const w=u(!1),Q=M([{label:"单号",prop:"orderNo"},{label:"休假时间",prop:"",width:280,formatter(t){return T.utc2beijing(t.startTime)+" 到 "+T.utc2beijing(t.endTime)}},{label:"休假时长",prop:"leaveTime"},{label:"休假类型",prop:"applyType",formatter(t,l,n){return{1:"事假",2:"调休",3:"年假"}[n]}},{label:"休假原因",prop:"reasons"},{label:"申请时间",prop:"createTime",width:180,formatter:(t,l,n)=>T.utc2beijing(n)},{label:"审批人",prop:"auditUsers"},{label:"当前审批人",prop:"curAuditUserName"},{label:"审批状态",prop:"applyState",formatter:(t,l,n)=>({1:"待审批",2:"审批中",3:"审批拒绝",4:"审批通过",5:"作废"})[n]}]),h=M({applyState:1}),r=M({applyType:1,startTime:"",endTime:"",leaveTime:"0天",reasons:""}),G={startTime:[{type:"date",required:!0,message:"请输入开始日期",trigger:"change"}],endTime:[{type:"date",required:!0,message:"请输入结束日期",trigger:"change"}],reasons:[{required:!0,message:"请输入休假原因",trigger:["change","blur"]}]},b=u({total:0,pageNum:1,pageSize:10}),y=u(!1);u(""),u("");const C=u("add"),q=u("添加"),$=u([]),H=u([]),I=t=>{let l={};const n=p=>{for(;p.length;){let s=p.pop();s.children&&s.action&&(l[s._id]=s.menuName),s.children&&!s.action&&n(s.children)}};n(JSON.parse(JSON.stringify(t)))},g=async()=>{const t={...J(h),...b.value};t.leaveName||delete t.leaveName;const{list:l,page:n}=await N.getLeaveList(t);$.value=l,b.value=n},K=async()=>{const t=await N.menuList();H.value=t,I(t)};re(()=>{g(),K()});const P=()=>{C.value="add",q.value="添加",y.value=!0},W=()=>{g()},j=t=>{y.value=!1,x(t)},X=t=>{b.value.pageNum=t,g()};function Y(t){t.validate(l=>{if(l){const n={...J(r)};n.action=C.value,N.leaveOperate(n).then(p=>{S.success(q.value+"审批成功!"),y.value=!1,x(t),g()})}else S.error("校验表单失败")})}const x=t=>{console.log(t),t.resetFields(),console.log(r)},Z=t=>{let l={...t};l.applyTypeName={1:"事假",2:"调休",3:"年假"}[l.applyType],l.time=T.utc2beijing(t.startTime)+" 到 "+T.utc2beijing(t.endTime),l.applyStateName={1:"待审批",2:"审批中",3:"审批拒绝",4:"审批通过",5:"作废"}[l.applyState],c.value=l,w.value=!0};function ee(t){C.value="delete",q.value="删除";const l={_id:t,action:C.value};N.leaveOperate(l).then(n=>{S.success("成功作废审批!"),g()})}const D=(t,l)=>{let{startTime:n,endTime:p}=r;!n||!p||(n>p?(S.error("开始日期不能晚于结束日期"),r.leaveTime="0天",setTimeout(()=>{r[t]=""},0)):r.leaveTime=(p-n)/(24*60*60*1e3)+1+"天")};return(t,l)=>{const n=i("el-option"),p=i("el-select"),s=i("el-form-item"),_=i("el-button"),L=i("el-form"),A=i("el-table-column"),le=i("el-table"),ae=i("el-pagination"),B=i("el-date-picker"),U=i("el-col"),te=i("el-row"),oe=i("el-input"),O=i("el-dialog"),F=i("el-step"),ne=i("el-steps");return k(),E("div",pe,[d("div",me,[e(L,{inline:"",model:h,ref_key:"formRef",ref:z},{default:a(()=>[e(s,{label:"审批状态",prop:"applyState"},{default:a(()=>[e(p,{modelValue:h.applyState,"onUpdate:modelValue":l[0]||(l[0]=o=>h.applyState=o)},{default:a(()=>[e(n,{value:"",label:"全部"}),e(n,{value:1,label:"待审批"}),e(n,{value:2,label:"审批中"}),e(n,{value:3,label:"审批拒绝"}),e(n,{value:4,label:"审批通过"}),e(n,{value:5,label:"作废"})]),_:1},8,["modelValue"])]),_:1}),e(s,null,{default:a(()=>[e(_,{type:"primary",onClick:W},{default:a(()=>[m("查询")]),_:1}),e(_,{onClick:l[1]||(l[1]=o=>{x(z.value),g()})},{default:a(()=>[m("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),d("div",ce,[d("div",_e,[e(_,{type:"primary",onClick:P},{default:a(()=>[m("申请休假")]),_:1})]),e(le,{data:$.value},{default:a(()=>[(k(!0),E(ie,null,ue(Q,o=>(k(),R(A,{key:o.prop,prop:o.prop,label:o.label,width:o.width,formatter:o.formatter},null,8,["prop","label","width","formatter"]))),128)),e(A,{fixed:"right",label:"操作",width:"150"},{default:a(o=>[e(_,{onClick:se=>Z(o.row),size:"small"},{default:a(()=>[m("查看")]),_:2},1032,["onClick"]),[1,2].includes(o.row.applyState)?(k(),R(_,{key:0,type:"danger",onClick:se=>ee(o.row._id),size:"small"},{default:a(()=>[m("作废")]),_:2},1032,["onClick"])):de("",!0)]),_:1})]),_:1},8,["data"]),e(ae,{"hide-on-single-page":"",class:"pagination",small:"","page-size":b.value.pageSize,background:"",layout:"prev, pager, next",total:b.value.total||0,onCurrentChange:X},null,8,["page-size","total"])]),e(O,{title:"申请休假",modelValue:y.value,"onUpdate:modelValue":l[10]||(l[10]=o=>y.value=o),width:"70%","before-close":()=>{j(V.value)}},{footer:a(()=>[d("span",fe,[e(_,{onClick:l[8]||(l[8]=o=>j(V.value))},{default:a(()=>[m("取消")]),_:1}),e(_,{type:"primary",onClick:l[9]||(l[9]=o=>Y(V.value))},{default:a(()=>[m("确定")]),_:1})])]),default:a(()=>[e(L,{ref_key:"dialogForm",ref:V,model:r,"label-width":"120px",rules:G},{default:a(()=>[e(s,{label:"休假类型",prop:"applyType",required:""},{default:a(()=>[e(p,{modelValue:r.applyType,"onUpdate:modelValue":l[2]||(l[2]=o=>r.applyType=o)},{default:a(()=>[e(n,{label:"事假",value:1}),e(n,{label:"调休",value:2}),e(n,{label:"年假",value:3})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"休假类型",required:""},{default:a(()=>[e(te,null,{default:a(()=>[e(U,{span:8},{default:a(()=>[e(s,{prop:"startTime",required:""},{default:a(()=>[e(B,{modelValue:r.startTime,"onUpdate:modelValue":l[3]||(l[3]=o=>r.startTime=o),type:"date",placeholder:"选择开始日期",onChange:l[4]||(l[4]=o=>D("startTime",o))},null,8,["modelValue"])]),_:1})]),_:1}),e(U,{span:1},{default:a(()=>[m("-")]),_:1}),e(U,{span:8},{default:a(()=>[e(s,{prop:"endTime",required:""},{default:a(()=>[e(B,{modelValue:r.endTime,"onUpdate:modelValue":l[5]||(l[5]=o=>r.endTime=o),type:"date",placeholder:"选择结束日期",onChange:l[6]||(l[6]=o=>D("endTime",o))},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{label:"休假时长",required:"",prop:"leaveTime"},{default:a(()=>[m(v(r.leaveTime),1)]),_:1}),e(s,{label:"休假原因",prop:"reasons",required:""},{default:a(()=>[e(oe,{type:"textarea",row:3,placeholder:"请输入休假原因",modelValue:r.reasons,"onUpdate:modelValue":l[7]||(l[7]=o=>r.reasons=o)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","before-close"]),e(O,{title:"申请休假详情",width:"50%",modelValue:w.value,"onUpdate:modelValue":l[12]||(l[12]=o=>w.value=o),"destroy-on-close":""},{footer:a(()=>[d("span",ve,[e(_,{onClick:l[11]||(l[11]=o=>w.value=!1)},{default:a(()=>[m("关 闭")]),_:1})])]),default:a(()=>[e(ne,{active:f(c).applyState>2?3:f(c).applyState,"align-center":""},{default:a(()=>[e(F,{title:"待审批"}),e(F,{title:"审批中"}),e(F,{title:"审批通过/审批拒绝"})]),_:1},8,["active"]),e(L,{"label-width":"120px","label-suffix":":"},{default:a(()=>[e(s,{label:"休假类型"},{default:a(()=>[d("div",null,v(f(c).applyTypeName),1)]),_:1}),e(s,{label:"休假时间"},{default:a(()=>[d("div",null,v(f(c).time),1)]),_:1}),e(s,{label:"休假时长"},{default:a(()=>[d("div",null,v(f(c).leaveTime),1)]),_:1}),e(s,{label:"休假原因"},{default:a(()=>[d("div",null,v(f(c).reasons),1)]),_:1}),e(s,{label:"审批状态"},{default:a(()=>[d("div",null,v(f(c).applyStateName),1)]),_:1}),e(s,{label:"审批人"},{default:a(()=>[d("div",null,v(f(c).curAuditUserName),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};export{ye as default};
