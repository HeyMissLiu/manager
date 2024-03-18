import{b as d,r as x,l as re,c as i,o as b,d as L,e as g,f as a,w as o,m as S,t as M,i as v,h as p,F as O,n as q,x as de,E as N,z as ue,q as K}from"./index-d2e98233.js";const ie={class:"dept-manager"},pe={class:"query-form"},ce={class:"base-table"},me={class:"action"},fe={class:"dialog-footer"},_e={class:"dialog-footer"},ge={__name:"Dept",setup(ve){const U=d(),V=d(),D=d([]),w=d(),j=x([{label:"部门名称",prop:"deptName"},{label:"负责人",prop:"userName"},{label:"更新时间",prop:"updateTime",formatter(l,e,s){return S.utc2beijing(s)}},{label:"创建时间",prop:"createTime",formatter(l,e,s){return S.utc2beijing(s)}}]),h=x({deptName:""}),u=x({}),z={deptName:[{required:!0,message:"请输入部门名称",trigger:"blur"}],user:[{required:!0,message:"请选择负责人",trigger:"blur"}]};d({total:0,pageNum:1,pageSize:10});const A=l=>{const[e,s,r]=l.split("/");Object.assign(u,{userId:e,userName:s,userEmail:r})},f=d(!1),y=d(!1),B=d(""),P=d(""),c=d("add"),k=d("添加"),C=d([]),E=d([]),T=l=>{let e={};const s=r=>{for(;r.length;){let n=r.pop();n.children&&n.action&&(e[n._id]=n.menuName),n.children&&!n.action&&s(n.children)}};s(JSON.parse(JSON.stringify(l)))},_=async()=>{const l={...M(h)};l.deptName||delete l.deptName;const e=await v.getDeptList(l);C.value=e},R=async()=>{const l=await v.menuList();E.value=l,T(l)},J=async()=>{const l=await v.getAllUserList();D.value=l};re(()=>{_(),R(),J()});const H=()=>{c.value="add",k.value="添加",f.value=!0},Q=()=>{_()},G=l=>{f.value=!1,$(l)},W=async l=>{await v.updatePermission(l)},X=()=>{let l=w.value.getCheckedNodes(),e=w.value.getHalfCheckedKeys(),s=[],r=[];l.map(m=>{m.children.length?r.push(m._id):s.push(m._id)});let n={_id:P.value,permissionList:{checkedKeys:s,halfCheckedKeys:r.concat(e)}};W(n),y.value=!1,N.success("设置成功"),_()};function Y(l){l.validate(e=>{if(e){const s={...M(u)};s.action=c.value,delete s.user,v.deptOperate(s).then(r=>{N.success(k.value+"部门成功!"),f.value=!1,$(l),_()})}else N.error("校验表单失败")})}const $=l=>{l.resetFields()},Z=l=>{c.value="edit",k.value=c.value==="add"?"增加":"编辑",f.value=!0,ue(()=>{Object.assign(u,l,{user:`${l.userId}/${l.userName}/${l.userEmail}`})})};function ee(l){c.value="delete",k.value="删除";const e={_id:l,action:c.value};v.deptOperate(e).then(s=>{N.success("成功删除部门!"),_()})}return(l,e)=>{const s=i("el-input"),r=i("el-form-item"),n=i("el-button"),m=i("el-form"),I=i("el-table-column"),le=i("el-table"),te=i("el-cascader"),ae=i("el-option"),oe=i("el-select"),F=i("el-dialog"),se=i("el-tree");return b(),L("div",ie,[g("div",pe,[a(m,{inline:"",model:h,ref_key:"formRef",ref:U},{default:o(()=>[a(r,{label:"部门名称",prop:"deptName"},{default:o(()=>[a(s,{modelValue:h.deptName,"onUpdate:modelValue":e[0]||(e[0]=t=>h.deptName=t),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1}),a(r,null,{default:o(()=>[a(n,{type:"primary",onClick:Q},{default:o(()=>[p("查询")]),_:1}),a(n,{onClick:e[1]||(e[1]=t=>{$(U.value),_()})},{default:o(()=>[p("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),g("div",ce,[g("div",me,[a(n,{type:"primary",onClick:H},{default:o(()=>[p("创建部门")]),_:1})]),a(le,{data:C.value,"row-key":"_id","tree-props":{children:"children"},stripe:""},{default:o(()=>[(b(!0),L(O,null,q(j,t=>(b(),K(I,{key:t.prop,prop:t.prop,label:t.label,width:t.width,formatter:t.formatter},null,8,["prop","label","width","formatter"]))),128)),a(I,{fixed:"right",label:"操作",width:"260"},{default:o(t=>[a(n,{type:"primary",onClick:ne=>Z(t.row),size:"small"},{default:o(()=>[p("编辑")]),_:2},1032,["onClick"]),a(n,{type:"danger",onClick:ne=>ee(t.row._id),size:"small"},{default:o(()=>[p("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),a(F,{title:c.value=="add"?"创建部门":"编辑部门",modelValue:f.value,"onUpdate:modelValue":e[8]||(e[8]=t=>f.value=t)},{footer:o(()=>[g("span",fe,[a(n,{onClick:e[6]||(e[6]=t=>G(V.value))},{default:o(()=>[p("取消")]),_:1}),a(n,{onClick:e[7]||(e[7]=t=>Y(V.value)),type:"primary"},{default:o(()=>[p("确定")]),_:1})])]),default:o(()=>[a(m,{ref_key:"dialogForm",ref:V,model:u,rules:z,"label-width":"120px"},{default:o(()=>[a(r,{label:"上级部门",prop:"parentId"},{default:o(()=>[a(te,{placeholder:"请选择上级部门",modelValue:u.parentId,"onUpdate:modelValue":e[2]||(e[2]=t=>u.parentId=t),props:{checkStrictly:!0,value:"_id",label:"deptName"},clearable:"",options:C.value,"show-all-levels":!0},null,8,["modelValue","options"])]),_:1}),a(r,{label:"部门名称",prop:"deptName"},{default:o(()=>[a(s,{placeholder:"请输入部门名称",modelValue:u.deptName,"onUpdate:modelValue":e[3]||(e[3]=t=>u.deptName=t)},null,8,["modelValue"])]),_:1}),a(r,{label:"负责人",prop:"user"},{default:o(()=>[a(oe,{placeholder:"请选择部门负责人",modelValue:u.user,"onUpdate:modelValue":e[4]||(e[4]=t=>u.user=t),onChange:A},{default:o(()=>[(b(!0),L(O,null,q(D.value,t=>(b(),K(ae,{key:t.userId,label:t.userName,value:`${t.userId}/${t.userName}/${t.userEmail}`},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"负责人邮箱",prop:"userEmail"},{default:o(()=>[a(s,{placeholder:"请输入负责人邮箱",modelValue:u.userEmail,"onUpdate:modelValue":e[5]||(e[5]=t=>u.userEmail=t),disabled:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"]),a(F,{title:"权限设置",modelValue:y.value,"onUpdate:modelValue":e[10]||(e[10]=t=>y.value=t)},{footer:o(()=>[g("span",_e,[a(n,{onClick:e[9]||(e[9]=t=>y.value=!1)},{default:o(()=>[p("取 消")]),_:1}),a(n,{type:"primary",onClick:X},{default:o(()=>[p("确 定")]),_:1})])]),default:o(()=>[a(m,{"label-width":"100px"},{default:o(()=>[a(r,{label:"部门名称"},{default:o(()=>[p(de(B.value),1)]),_:1}),a(r,{label:"选择权限"},{default:o(()=>[a(se,{ref_key:"tree",ref:w,data:E.value,"show-checkbox":"","node-key":"_id","default-expand-all":"",props:{label:"menuName"}},null,8,["data"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};export{ge as default};
