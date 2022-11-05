# Summary of the paper Generating Sequences by learning to [Self-] correct
 *you can find more information about this paper at
[https://arxiv.org/abs/2211.00053]*(https://arxiv.org/abs/2211.00053)

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
formula 1 
Since the generator and corrector are separated, we can use the generator as is and train the corrector with different objectives for different task requirements.
The corrector can receive explicit feedback, which assists it in making accurate predictions.
The main objective of this algorithm is to take the initial hypothesis from the base generator and then iteratively improve the hypothesis with the corrector, while maintaining as much similarity with the initial hypothesis as possible.
image 2

The algorithm collects several generations for each input, groups them, and selects a pair of generations that increase in value and are similar, then trains the corrector on these pairs.

Algorithm:
generator model =  \mathcal{p_{0}\left( \mathcal{y_{0}|\mathcal{x}} \right)} 
corrercor model = \mathcal{p_{\theta\left( \mathcal{y'|y_{0},x} \right)}}
At initialization state we have a generator, a corrector, a set of training prompts \mathrm{x}, a value function \mathcal{v} : \mathcal{Y} \to \mathrm{R} , additional feedback \mathcal{f} : \mathcal{Y} \to \mathcal{F} and learn \mathcal{p_{\theta}\left( \mathcal{y' |\mathcal{y},\mathcal{x},\mathcal{f\left( \mathcal{y} \right)}} \right)}, where \mathcal{F} can be arbitrary.
First, we initialise a datapool by sampling from the generator model.
formula for initializing datapool is:
\mathrm{D_{x}} = \{ \left( \mathcal{x},\mathcal{y},\mathcal{v\left( y \right)},\mathcal{f\left( y \right) } \right) |\quad \textrm{for all} \quad \mathcal{y}\in \mathcal{y^{1:\mathrm{N}}}  \sim \mathcal{q\left( \mathcal{p_{0}\left( .|\mathcal{x} \right)} \right)} \}, \quad \mathrm{D} = \bigcup_{\underset{}{\mathcal{x\in \mathrm{X}}}}^{}\mathrm{D_{\mathcal{x}}}


where \mathcal{y}^{1:\mathrm{N}} stands for the number of generated output by the decoding algorithm \mathcal{q} .
then we will feed that to the corrector, and then append the new generations from the corrector to the datapool. 

Next, we try to compare previously generated output with the new output using the value function and see which one is greater. We select all the cases where the new output is higher than the previous and add them to a new data pool \mathrm{P}
formual for P:
\mathrm{P_{x}} = \{ \left( \mathcal{x},\mathcal{y},\mathcal{y'} \right)| \mathcal{v\left(\mathcal{y}  \right) \lt \mathcal{v\left( \mathcal{y'} \right) \quad \text{for all  } \mathcal{y},\mathcal{y'}\in \mathrm{D_{\mathcal{x}}}\times \mathrm{D_{\mathcal{x}}}}} \}, \quad \mathrm{P} = \bigcup_{\underset{}{\mathcal{x}\in \mathrm{X}}}^{} \mathrm{P}_{\mathcal{x}}
Here x, y, and y' are input, hypothesis, and correction, respectively.

now, it's time to train the correrctor.
We sample a pair of x,y, and y' from \mathrm{P} that satisfy the below equation.
formual for learning:
\mathbb{P}\left[ \left( \mathcal{x},\mathcal{y},\mathcal{y'} \right) \right] ∝ \text{exp}\left( \alpha.\left( \mathcal{v\left( \mathcal{y'} \right)-\mathcal{v\left(\mathcal{y}\right)}} \right) +\beta.\mathcal{s}\left(\mathcal{y},\mathcal{y'}\right)\right)/\mathrm{Z}\left( \mathcal{y}\right) 


\alpha.\left( \mathcal{v\left( \mathcal{y'} \right)} - \mathcal{v\left( \mathcal{y} \right)}\right)      cares about improvement and        \beta.\mathcal{s}\left( \mathcal{y},\mathcal{y'} \right)             cares about similarity.
Increasing \alpha puts more weight on targets to add more value and if we increase \beta , it retains more simillar targets.
We train corrector using cross-entropy loss \mathscr{L}\left( \theta \right) = -\text{log}\mathcal{p_{\theta}}\left( \mathcal{y'} | \mathcal{y},\mathcal{x},\mathcal{f\left( \mathcal{y} \right)} \right)

During the exploration stage, a self-correcting algorithm adds new generations to the datapool.

\mathrm{D'_{x}} = \left\{ \left( \mathcal{x},\mathcal{y'},\mathcal{v\left( \mathcal{y'} \right),\mathcal{f\left( \mathcal{y'} \right)}} \right) | \quad \text{for all }\mathcal{y'}\in \mathcal{y'^{1:\mathrm{N}}} \sim \mathcal{q}\left( \mathcal{p_{\theta}}\left( \cdot |\mathcal{y},\mathcal{x},\mathcal{f\mathcal{y}} \right) \right)\right\}, \quad \mathrm{D'} = \bigcup_{\underset{}{\mathcal{x}\in \mathrm{X}}}^{}\mathrm{D'_{x}}

\mathrm{D} \gets \mathrm{D}\cup\mathrm{D'}

At inference time, a self-correcting algorithm takes the generated output from the base generator and iteratively improves the hypothesis.

For a more in-depth idea of this algorithm, check out this paper.


