import{p as j}from"./chunk-4BMEZGHF-6af2fb98.js";import{a5 as S,Y as z,aN as U,O as Y,y as Z,z as q,s as H,h as J,j as K,i as Q,f as p,t as F,E as X,k as tt,P as et,T as at,ad as rt,u as nt}from"./app-6be1f847.js";import{p as it}from"./mermaid-parser.core-a330820d.js";import{d as W}from"./arc-1af5ae4e.js";import{o as st}from"./ordinal-ba9b4969.js";import"./baseUniq-c3b11e7d.js";import"./basePickBy-5ce17cac.js";import"./clone-1439ba2d.js";import"./init-77b53fdd.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,a=ot,m=null,o=S(0),g=S(z),x=S(0);function i(e){var r,l=(e=U(e)).length,c,A,h=0,u=new Array(l),n=new Array(l),v=+o.apply(this,arguments),w=Math.min(z,Math.max(-z,g.apply(this,arguments)-v)),f,T=Math.min(Math.abs(w)/l,x.apply(this,arguments)),$=T*(w<0?-1:1),d;for(r=0;r<l;++r)(d=n[u[r]=r]=+t(e[r],r,e))>0&&(h+=d);for(a!=null?u.sort(function(y,C){return a(n[y],n[C])}):m!=null&&u.sort(function(y,C){return m(e[y],e[C])}),r=0,A=h?(w-l*$)/h:0;r<l;++r,v=f)c=u[r],d=n[c],f=v+(d>0?d*A:0)+$,n[c]={data:e[c],index:r,value:d,startAngle:v,endAngle:f,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,m=null,i):a},i.sort=function(e){return arguments.length?(m=e,a=null,i):m},i.startAngle=function(e){return arguments.length?(o=typeof e=="function"?e:S(+e),i):o},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:S(+e),i):g},i.padAngle=function(e){return arguments.length?(x=typeof e=="function"?e:S(+e),i):x},i}var R=Y.pie,G={sections:new Map,showData:!1,config:R},M=G.sections,N=G.showData,ut=structuredClone(R),pt=p(()=>structuredClone(ut),"getConfig"),gt=p(()=>{M=new Map,N=G.showData,X()},"clear"),dt=p(({label:t,value:a})=>{M.has(t)||(M.set(t,a),F.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=p(()=>M,"getSections"),mt=p(t=>{N=t},"setShowData"),ht=p(()=>N,"getShowData"),I={getConfig:pt,clear:gt,setDiagramTitle:Z,getDiagramTitle:q,setAccTitle:H,getAccTitle:J,setAccDescription:K,getAccDescription:Q,addSection:dt,getSections:ft,setShowData:mt,getShowData:ht},vt=p((t,a)=>{j(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:p(async t=>{const a=await it("pie",t);F.debug(a),vt(a,I)},"parse")},St=p(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),xt=St,At=p(t=>{const a=[...t.entries()].map(o=>({label:o[0],value:o[1]})).sort((o,g)=>g.value-o.value);return ct().value(o=>o.value)(a)},"createPieArcs"),wt=p((t,a,m,o)=>{F.debug(`rendering pie chart
`+t);const g=o.db,x=tt(),i=et(g.getConfig(),x.pie),e=40,r=18,l=4,c=450,A=c,h=at(a),u=h.append("g");u.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=x;let[v]=rt(n.pieOuterStrokeWidth);v??(v=2);const w=i.textPosition,f=Math.min(A,c)/2-e,T=W().innerRadius(0).outerRadius(f),$=W().innerRadius(f*w).outerRadius(f*w);u.append("circle").attr("cx",0).attr("cy",0).attr("r",f+v/2).attr("class","pieOuterCircle");const d=g.getSections(),y=At(d),C=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],D=st(C);u.selectAll("mySlices").data(y).enter().append("path").attr("d",T).attr("fill",s=>D(s.data.label)).attr("class","pieCircle");let O=0;d.forEach(s=>{O+=s}),u.selectAll("mySlices").data(y).enter().append("text").text(s=>(s.data.value/O*100).toFixed(0)+"%").attr("transform",s=>"translate("+$.centroid(s)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const b=u.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(s,k)=>{const E=r+l,_=E*D.domain().length/2,B=12*r,V=k*E-_;return"translate("+B+","+V+")"});b.append("rect").attr("width",r).attr("height",r).style("fill",D).style("stroke",D),b.data(y).append("text").attr("x",r+l).attr("y",r-l).text(s=>{const{label:k,value:E}=s.data;return g.getShowData()?`${k} [${E}]`:k});const L=Math.max(...b.selectAll("text").nodes().map(s=>(s==null?void 0:s.getBoundingClientRect().width)??0)),P=A+e+r+l+L;h.attr("viewBox",`0 0 ${P} ${c}`),nt(h,c,P,i.useMaxWidth)},"draw"),Ct={draw:wt},Gt={parser:yt,db:I,renderer:Ct,styles:xt};export{Gt as diagram};
