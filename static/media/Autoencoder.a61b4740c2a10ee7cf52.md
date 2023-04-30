<div style="margin:auto;text-align:center;font-size:50px"><i>Autoencoders </i> </div>
<br/><br/>
An ... autoencoder is a neural network that is trained to learn the representation from input and then reconstruct it as output.
<br/> <br/>
<img style="width:100%" src="https://user-images.githubusercontent.com/58060373/200153761-09058485-1c7b-4fba-a261-3c0cdcadbfd2.jpg"/>
<div style="text-align:center"> <i> Autoencoder </i></div>
<br/><br/>
We can think of the network as a combination of two functions.
One is the encoder function, which tries to learn the hidden representation from the input, and another is the decoder, whose job is to give us the output that is very similar to the input.
<br/>Encoder function can be viewed as &nbsp;
<img src="https://user-images.githubusercontent.com/58060373/200155067-c51f1174-68bc-410b-8d5c-6291348cb9be.png" align="center" border="0" alt="h = f(x)" width="69" height="19" />&nbsp;
and the decoder function is &nbsp;
<img src="https://user-images.githubusercontent.com/58060373/200155036-e9f0d3eb-8403-4d80-a46f-1b78285a4174.png" align="center" border="0" alt=" \widehat{x}  = g(h)" width="72" height="21" />&nbsp;

With undercomplete autoencoders in the middle layers, we use fewer neurons. so that the network can learn only useful information for reconstruction
and should avoid redundancies in data.
We shouldn't let the autoencoder copy the input as it is. Because the network learns no useful representation in overcomplete cases, it only copies the data input. We want our network to produce the desired output even with incomplete data at inference time.

An autoencoder whose hidden layer dimension is less than the input dimension is called undercomplete.
In this setting, the network should learn only useful properties from the training data.
The loss function we use for learning is &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200155011-87e80d4b-c270-4a8c-b608-ce55f28f98f8.png" align="center" border="0" alt=" L(x,g(f(x)))" width="104" height="19" />.
<br/>
Autoencoders with nonlinear encoder functions &nbsp; <i>f </i> &nbsp; and nonlinear decoder functions &nbsp; <i>g</i> &nbsp; can thus learn a more useful nonlinear generalization of PCA.

Undercomplete autoencoders can learn the most valuable features of the data distribution. Autoencoders fail to learn useful information if the encoder and decoder are given too much capacity (i.e., neurons in hidden layers are larger than the input dimension ). We use overcomplete autoencoders in some cases.


While training a sparse autoencoder, we use the sparsity penalty &nbsp; <img src="https://user-images.githubusercontent.com/58060373/200154986-a36c2fc1-36f0-4c5b-8046-4a5e94c128b4.png" align="center" border="0" alt=" \Omega (h)" width="42" height="18" /> &nbsp; on the hidden layer.
&nbsp;
<br/>
The loss function for sparse autoencoder is &nbsp;&nbsp;  <img src="https://user-images.githubusercontent.com/58060373/200155247-3097d8ab-9026-4130-b781-694f815465db.png" align="center" border="0" alt="L(x,g(f(x))) +  \Omega (x)" width="162" height="19" />
<br/>
Sparse autoencoders are used to learn features for different tasks, such as classification.
Autoencoders have been used for dimensionality reduction, information retrieval tasks, denoising the input data, etc.