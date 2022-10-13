import{TableauViz as r}from"https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";import{r as s,a9 as p,o as m,a1 as h,a2 as e,a3 as b,n as t,a4 as n,a5 as l,b as a,a8 as _,a as i}from"./index.a561d71a.js";const f=a("h1",null,"Teableau Embedding 3 & Vue Composition API",-1),v=a("h3",null,"Sample code",-1),g=a("span",{class:"file-name"},"views/TableauEmbeddingApi.vue",-1),w=a("figure",null,[a("pre",null,[i(`    
        `),a("code",{class:"code-block"},`
    <script setup>
    import { ref, onMounted} from 'vue'
    import {TableauViz} from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'; 

    const width = ref('1200')
    const height= ref('900')
    const initTableau = ()=>{
        const viz = new TableauViz();
        viz.src = "https://public.tableau.com/views/Superstore_15966555595160/Sample-SuperstoreSalesProfit";
        document.getElementById('tableauViz').appendChild(viz);
    }
    onMounted( ()=>{
        initTableau();
    })

    <\/script>        

    <template>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    <h1>Teableau Embedding 3 & Vue Composition API</h1>
                    <div id="tableauViz" :style="\`margin:0 auto; width:\${width}px; height:\${height}px;\`"></div>
                </v-col>
            </v-row>
        </v-container>
    </template>
        `),i(`  
        `)])],-1),V=a("h3",null," Avoid using Emdedding API v3.0.0. This version won't work well. ",-1),C={__name:"TableauEmbeddingApi",setup(x){const c=s("1200"),u=s("900"),d=()=>{const o=new r;o.src="https://public.tableau.com/views/Superstore_15966555595160/Sample-SuperstoreSalesProfit",document.getElementById("tableauViz").appendChild(o)};return p(()=>{d()}),(o,z)=>(m(),h(b,null,{default:e(()=>[t(l,{class:"text-center"},{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[f]),_:1})]),_:1}),t(l,{class:"text-left"},{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[v,g,w]),_:1})]),_:1}),t(l,{class:"text-left",style:{"background-color":"pink"}},{default:e(()=>[t(n,{cols:"12",class:"bold"},{default:e(()=>[V]),_:1})]),_:1}),t(l,{class:"text-center"},{default:e(()=>[t(n,{cols:"12"},{default:e(()=>[a("div",{id:"tableauViz",style:_(`margin:0 auto; width:${c.value}px; height:${u.value}px;`)},null,4)]),_:1})]),_:1})]),_:1}))}};export{C as default};
