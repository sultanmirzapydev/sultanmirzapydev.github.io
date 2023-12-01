# Summary of the paper "*Generating Sequences by learning to [Self-] correct*"
 *you can find more information about this paper at
[https://arxiv.org/abs/2211.00053](https://arxiv.org/abs/2211.00053)*

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
```
$$ \sum_{\frac{2}{v}}^{z}bhm $$

$$~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\rm{head_i} = \rm{Attention(QW_{i}^{d_{model}\times d_q},KW_{i}^{d_{model}\times d_k},VW_{i}^{d_{model}\times d_v})}$$
<br/>
<br/>
<br/><br/>
The self-correct method is useful for sequential tasks. Large language models given an input generate an output, but they themselves have no mechanism to determine whether the genetated output is valid or not. When they output something, they start from scratch again for the next input.
Large language models should always provide us with correct, factual answers while avoiding the generation of explicit content. which is impossible to achieve with the currently available language models as they are prone to error.
<br/> <br/> <br/> <br/><br/>
To address this problem, the authors of this paper developed a self-correcting algorithm.
They use this method to generate outputs from large language models, which are then fed into the corrector model, which iteratively corrects the output to the desired one.
This algorithm performs best on mathematical program synthesis, generating a sentence given some constraint words, and controlling toxicity.
Large language models meet our requirements most of the time, but they occasionally make mistakes. To ensure that our models do not cause issues for our end users, we need some methods to deal with them, which is where the self-corrector comes in.

<img style="width:100%" src="https://user-images.githubusercontent.com/58060373/200112945-17be251e-d4c2-4aea-999d-45c8751d343b.JPG"/>
<div style="text-align:center"> credit: <a style="text-decoration:none" href="https://arxiv.org/abs/2211.00053"> Sean et al. </a></div>

<br/> <br/>
Figure 1 shows how the corrector model takes the generated output from the base model as input and then iteratively improves the quality of the input.
They have also found that the same corrector can be applied to larger models.
The self-correcting method can be decomposed into two modules: a base generator and a corrector.
<br/>
<img style="display:block;margin:auto" src="https://user-images.githubusercontent.com/58060373/200160794-17852b41-87d5-49b3-b3a8-8ff7148f97ac.png" align="center" border="0" alt="p(y|x) =  \sum_{y_{0}}p_{0}(y_{0}|x) p_{ \theta }(y|y_{0},x)" width="258" height="42" />
<br/>
Since the generator and corrector are separated, we can use the generator as is and train the corrector with different objectives for different task requirements.
The corrector can receive explicit feedback, which assists it in making accurate predictions.
The main objective of this algorithm is to take the initial hypothesis from the base generator and then iteratively improve the hypothesis with the corrector, while maintaining as much similarity with the initial hypothesis as possible.
<br/><br/>
<img style="width:100%" src="https://user-images.githubusercontent.com/58060373/200156280-b2d6f992-8098-4a7e-b69b-f07cc6e60ddc.JPG"/>
<div style="text-align:center"> credit: <a style="text-decoration:none" href="https://arxiv.org/abs/2211.00053"> Sean et al. </a></div>


The algorithm collects several generations for each input, groups them, and selects a pair of generations that increase in value and are similar, then trains the corrector on these pairs.
<br/><br/>
<p style="font-weight:600"> Algorithm: <p>
generator model &nbsp;= &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200155604-4b9a9f8f-2067-4a89-92cb-973293b1a604.jpg" align="center" border="0" alt="p_{0}(y_{0} | x)" width="72" height="19" />
<br/>
corrertor model &nbsp;= &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200155730-c11c0c68-cc4e-4096-a4ad-b3c3a7588a8c.png" align="center" border="0" alt="p_{ \theta }(y'|y_{0},x)" width="97" height="21" />
<br/>
At initialization state we have a generator, a corrector, a set of training prompts&nbsp; <i>X</i>,&nbsp; a value function &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200156185-93a0eada-bc46-4c1e-9bf3-7abb7b287f71.png" align="center" border="0" alt="v : Y  \rightarrow R" width="81" height="15" />, &nbsp; additional feedback function &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200156636-21cef5f5-27ce-4a86-a451-e17baafdc772.png" align="center" border="0" alt="f : Y  \rightarrow F" width="75" height="19" /> &nbsp; and learn &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200156797-d7c2148e-8538-4f18-9e1d-1592d59511ce.png" align="center" border="0" alt="p_{ \theta }(y'|y,x,f(y))" width="128" height="21" />, &nbsp; where &nbsp; <i>f</i> &nbsp; can be arbitrary.
First, we initialise a datapool by sampling from the generator model.
<br/>
formula for initializing datapool is: &nbsp;
<img src="https://user-images.githubusercontent.com/58060373/200157188-f20503c7-3117-4ff8-9746-26507db3e52d.png" align="center" border="0" alt="D_{x} = \{(x,y,v(y),f(y))  \mid \  for \ all  \  y \in y^{1:N}  \sim q(p_{0}(.|x)) \}, \ D =    \bigcup_{a \in X}   } D_{x}" width="536" height="39" style="margin-top:11px"/>


where &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200157277-30588081-f4cf-4765-a4d7-1f44594f085f.png" align="center" border="0" alt="y^{1:N}" width="37" height="22" />  &nbsp; stands for the number of generated output by the decoding algorithm &nbsp;<i>q</i> .
then we will feed that to the corrector, and then append the new generations from the corrector to the datapool by following below equation. 
<div style="width:100%">
<img style="display:block;margin:auto" src="https://user-images.githubusercontent.com/58060373/200159955-a579213d-e4fd-4463-91a4-723b4502ef41.png" align="center" border="0" alt="D'_{x} = \{ (x,y',v(y'),f(y')) | \ \ for \ all \ y'  \in y'^{1:N} \sim q(p_{ \theta }(.|y,x,f(y)))  \}" width="525" height="26" />
<br/>
<img style="display:block;margin:auto"  src="https://user-images.githubusercontent.com/58060373/200160069-27ca5d96-66eb-4f08-8cfb-b9022a1ee68d.png" align="center" border="0" alt="D' =  \bigcup_{x \in X} D'_{x}" width="94" height="39" />
<br/>
<img style="display:block;margin:auto"  src="https://user-images.githubusercontent.com/58060373/200160195-cae4e791-eaef-4728-af56-f4b00db33d13.png" align="center" border="0" alt="D  \longleftarrow D   \cup D'" width="103" height="18" />
</div>
<br/>

Next, we try to compare previously generated output with the new output using the value function and see which one is greater. We select all the cases where the new output is higher than the previous and add them to a new data pool <i>P</i>.
<br/>
formula for <i>P</i>:
<img src="https://user-images.githubusercontent.com/58060373/200157984-22e45a95-41ce-4bc2-a0af-ee18e990c5f8.png" align="center" border="0" alt="P_{x} = \{(x,y,y')|v(y) < v(y') \  \ for\  all \ y,y'  \in D_{x} \times D_{x} \},\ \  P =  \bigcup_{x \in  X} P_{x}" width="524" height="39" style="margin-top:11px" />
<br/>
Here <i>x, y,</i> and <i>y' </i> are input, hypothesis, and correction, respectively.
<br/><br/><br/>
now, it's time to train the correrctor.
Self-corrective algorithm selects a batch of value-improving pairs from datapool <i>P</i> using below equation. 
<br/>

<img style="display:block;margin:auto;" src="https://user-images.githubusercontent.com/58060373/200158452-8d4f11fe-0f83-4629-a469-93fea630bfa7.png" align="center" border="0" alt="P[(x,y,y')]  \propto exp( \alpha . (v(y')-v(y)) +  \beta. s(y,y'))/Z(y)" width="435" height="21" /> 


<img src="https://user-images.githubusercontent.com/58060373/200159162-121c3148-536c-42b2-8770-d2733c9816e5.png" align="center" border="0" alt=" \alpha . (v(y') - v(y))" width="133" height="21" />   &nbsp;    cares about improvement and    &nbsp;     <img src="https://user-images.githubusercontent.com/58060373/200159256-705fed3e-5396-497d-8c6c-096c35d60091.png" align="center" border="0" alt=" \beta .s(y,y')" width="78" height="21" />     &nbsp;         cares about similarity.
Increasing  &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200159364-4219ca36-4975-4211-a16c-8c4ea016ade9.png" align="center" border="0" alt=" \alpha " width="17" height="12" />  puts more weight on targets to add more value and if we increase  &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200159313-212e6f69-1578-4557-b42b-870d2a7ff8f0.png" align="center" border="0" alt=" \beta" width="17" height="19" />,  &nbsp; it retains more simillar targets.
We train the corrector using cross-entropy loss &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200159601-65ddc956-ec74-43c9-9306-bd0cbd5b6146.png" align="center" border="0" alt="L( \theta ) = -logp_{\theta}(y'| y,x,f(y))" width="224" height="21" /> &nbsp; on the batches that we have sampled from the above equation.

<!-- During the exploration stage, a self-correcting algorithm adds new generations to the datapool.
<div style="width:100%">
<img style="display:block;margin:auto" src="https://user-images.githubusercontent.com/58060373/200159955-a579213d-e4fd-4463-91a4-723b4502ef41.png" align="center" border="0" alt="D'_{x} = \{ (x,y',v(y'),f(y')) | \ \ for \ all \ y'  \in y'^{1:N} \sim q(p_{ \theta }(.|y,x,f(y)))  \}" width="525" height="26" />
<br/>
<img style="display:block;margin:auto"  src="https://user-images.githubusercontent.com/58060373/200160069-27ca5d96-66eb-4f08-8cfb-b9022a1ee68d.png" align="center" border="0" alt="D' =  \bigcup_{x \in X} D'_{x}" width="94" height="39" />
<br/>
<img style="display:block;margin:auto"  src="https://user-images.githubusercontent.com/58060373/200160195-cae4e791-eaef-4728-af56-f4b00db33d13.png" align="center" border="0" alt="D  \longleftarrow D   \cup D'" width="103" height="18" />
</div> -->
<br/>

At inference time, a self-correcting algorithm takes the generated output from the base generator and iteratively improves the hypothesis.

For a more in-depth idea of this algorithm, check out the paper &nbsp; [https://arxiv.org/abs/2211.00053](https://arxiv.org/abs/2211.00053)


