import{r as f,a0 as v,o as c,a1 as _,a2 as e,a3 as S,a9 as x,n as t,a4 as i,A as m,a as o,aa as r,p as g,a5 as u,c as y,ab as k,ac as b,b as s}from"./index.4028e586.js";const V=s("h2",null,"Text-to-Speech Playground",-1),C=s("h3",null," Web Speech API - SpeechSynthesis",-1),T=s("h4",null," Modern browsers come with Speech Synthesis for putting text-to-speech feature on web pages. No extra installation is required. ",-1),B={class:"text-h5 ml-5 pl-5"},N=s("h3",null,"Sample code",-1),U=s("span",{class:"file-name"},"views/TextToSpeech.vue",-1),F=s("figure",null,[s("pre",null,[o(`    
        `),s("code",{class:"code-block"},`
  
  <template>  
        <v-btn rounded large color="green" dark
            @click="speak('Hello world')"
        > Hello world
          <v-icon class="ml-5">
            mdi-arrow-right-drop-circle
          </v-icon>
        </v-btn>
  </template> 

  <script setup>
    const speak = (text)=>{
        // const synth = window.speechSynthesis;  // For getting or setting the voice; 
        // const voices = synth.getVoices();      // This app will use the default voice only
        const ssu = new SpeechSynthesisUtterance()
        // ssu.voice = voices[0]                  // Each machine's first voice may be different;
                                                  // This app will use the default voice only
        ssu.lang = 'en-US'                        // If unset, the app's (i.e. the <html> lang value) lang will be used, 
                                                  // or the user-agent default if that is unset too.
        ssu.text = text
        window.speechSynthesis.speak(ssu);
    }
  <\/script>

        `),o(`  
        `)])],-1),j={__name:"FavoriteQuotes",setup(I){const d=f(),w=()=>{x.get("https://raw.githubusercontent.com/sinjiya/Samples/main/Quotes.json").then(n=>{d.value=n.data}).catch(n=>{console.log(n.message)})},h=f("Click to Play Sound"),p=n=>{const a=new SpeechSynthesisUtterance;a.lang="en-US",a.text=n,window.speechSynthesis.speak(a)};return v(()=>{w()}),(n,a)=>(c(),_(S,null,{default:e(()=>[t(u,{class:"text-center mt-5"},{default:e(()=>[t(i,{cols:"12"},{default:e(()=>[V,C,T,t(m,{rounded:"",large:"",color:"green",dark:"",onClick:a[0]||(a[0]=l=>p(h.value))},{default:e(()=>[o(r(h.value)+" ",1),t(g,{class:"ml-5",style:{"font-size":"150%"}},{default:e(()=>[o("mdi-arrow-right-drop-circle")]),_:1})]),_:1})]),_:1})]),_:1}),(c(!0),y(b,null,k(d.value,l=>(c(),_(u,{class:"text-center mt-5",key:l.id},{default:e(()=>[t(i,{cols:"12",class:"text-left"},{default:e(()=>[t(m,{rounded:"",large:"",color:"green",dark:"",class:"mr-5",onClick:P=>p(l.text)},{default:e(()=>[o(r(l.name)+" ",1),t(g,{class:"ml-5",style:{"font-size":"150%"}},{default:e(()=>[o("mdi-arrow-right-drop-circle")]),_:1})]),_:2},1032,["onClick"]),s("div",B,r(l.text),1)]),_:2},1024)]),_:2},1024))),128)),t(u,{class:"text-left mt-5"},{default:e(()=>[t(i,{cols:"12"},{default:e(()=>[N,U,F]),_:1})]),_:1})]),_:1}))}};export{j as default};
