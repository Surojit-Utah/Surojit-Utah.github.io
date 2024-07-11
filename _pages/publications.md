---
layout: archive
title: "Projects"
permalink: /publications/
author_profile: true
---
My research is focused on developing deep latent variable models (DLVMs), such as the VAE, with provable properties of the distribution in the latent space that find application in outlier detection and disentanglement analysis. I have developed a method to find the relevant latent variables in DLVMs that are sufficient to model a data distribution, representing the intrinsic dimensions of the dataset. In addition, I am interested in training deep neural networks with limited annotated data, and I have proposed methods to interpret biomedical and seismic images using Gaussian processes in the few-shot setup. Besides probabilistic modeling, I have worked on registering 3D scans (RGB-D data). 

As a research assistant, I have collaborated with researchers from ExxonMobil, USA, on multiple projects related to interpreting seismic images, such as few-shot segmentation, multitask learning, and explainable AI. I also completed a data science-computer vision internship at Ancestry, where I gained valuable experience working with large-scale image data and developing innovative solutions.

<br />
<br />
# ARD-VAE: A Statistical Formulation to Find the Relevant Latent Dimensions of Variational Autoencoders 
<b>Surojit Saha</b>, Sarang Joshi, and Ross Whitaker (2024).
***(under review)***<br />
[PDF](http://surojit-utah.github.io/files/ARD_VAE.pdf "PDF") [Code](https://github.com/Surojit-Utah/ARD-VAE "Code")

* We propose the ARD-VAE to discover relevant axes in the VAE using a hierarchical prior without modification of the ELBO in the VAE.
* The ARD-VAE is insensitive to the choice of the autoencoder architecture and optimization strategies.
* Empirical evaluations demonstrate the effectiveness of the ARD-VAE in modeling data distributions and finding relevant generative factors.

<br />
<br />
# AdaSemSeg: An Adaptive Few-shot Semantic Segmentation of Seismic Facies 
<b>Surojit Saha</b>, and Ross Whitaker (2024)
***(under review)***<br />
[PDF](http://surojit-utah.github.io/files/AdaSemSeg.pdf "PDF") [Code](https://github.com/Surojit-Utah/AdaSemSeg "Code")

* We propose an adaptive FSSS method for identifying seismic facies that is flexible to handle the variability in the number of facies across datasets. 
* Initialization of the image encoder using contrastive learning helps improve the AdaSemSeg’s performance.
* The performance of the AdaSemSeg evaluated on target datasets without refinement is comparable to the baselines.
* The AdaSemSeg comprehensively outperforms the prototype-based FSSS method and the segmentation model trained using transfer learning.

<br />
<br />
# Matching Aggregate Posteriors in the Variational Autoencoder 
<b>Surojit Saha</b>, Sarang Joshi, and Ross Whitaker, &quot; Matching Aggregate Posteriors in the Variational Autoencoder &quot;, <i>International Conference on Pattern Recognition (Early Accept)</i>, 2024.
<br />
[PDF](http://surojit-utah.github.io/files/AVAE.pdf "PDF") [Code](https://github.com/Surojit-Utah/AVAE "Code")

* The AVAE matches the aggregate posterior to the prior using kernel density estimate. 
* This method aims at filling-up holes in the latent space of the VAE and alleviate posterior collapse observed under certain training scenarios.
* An automated method for estimating KDE bandwidth.
* Address the bias in the estimated bandwidth that encourages using KDE in high dimensional latent spaces (dimensions > 100).
* The regularization scalar $$\beta$$ is updated during training using the proposed heuristic. Thus, the AVAE is free from tuning the hyper-parameter, $$\beta$$.
* The use of the diagonal covariance in the posterior distribution, $$q_{\phi}(\mathbf{z} \mid \mathbf{x})$$, in the VAE helps in learning disentangled representations in an unsupervised framework. However, the AVAE is free from such modeling assumptions, and thus, the latent axes do not represent the generative factors of a dataset, unlike the VAE.
* We propose a technique to discover the latent factors of a dataset using the learned representations of the AVAE.

<br />
<br />
# Multi-task Training as Regularization Strategy for Seismic Image Segmentation 
<b>Surojit Saha</b>\*, Wasim Gazi\*, Rehman Mohammed, Thomas Rapstine, Hayden Powers, and Ross Whitaker, &quot; Multi-task Training as Regularization Strategy for Seismic Image Segmentation&quot;, <i>IEEE GEOSCIENCE AND REMOTE SENSING LETTERS</i>, 2023.
<br />
*=Equal Contribution
<br />
[PDF](http://surojit-utah.github.io/files/Multitask.pdf "PDF")
* Defining/proposing domain-specific, self-supervised auxiliary tasks for regularizing deep neural networks designed to segment channels in seismic images.
* Analysis and demonstration of the efficacy of the proposed multi-task learning for segmentation of channels.
* Exhibition of the effectiveness of multi-task learning in scenarios with limited annotated data to interpret complex seismic images.

<br />
<br />
# GENs: Generative Encoding Networks 
<b>Surojit Saha</b>, Shireen Elhabian, Ross Whitaker, &quot; GENs: Generative Encoding Networks &quot;, <i>Machine Learning</i>, 2022.
<br />
[PDF](http://surojit-utah.github.io/files/GEN.pdf "PDF")
* Use of the KDE for approximation of the data distribution in the latent space, which is used in the computation of the JSD loss.
* A robust, automated method for the KDE bandwidth estimation that uses the known structure of the target distribution.
* An analytical proof that the proposed optimization, on convergence, coincides to, within a known scaling factor, the target distribution.
* Empirical results showing that the KDE-based JSD computation is as or more effective than the results from adversarial training, particularly with limited training data.
* A demonstration of the use of the latent space built with GENs for outlier detection with comparisons against SOTA methods.

<br />
<br />
# GP-UNet: Few-Shot Segmentation of Microscopy Images Using Gaussian Process 
Surojit Saha, Ouk Choi, Ross Whitaker, &quot; Few-Shot Segmentation of Microscopy Images Using Gaussian Process &quot;, <i>MOVI, MICCAI workshop</i>, 2022.
<br />
[PDF](http://surojit-utah.github.io/files/GPUNet.pdf "PDF")

{% if site.author.googlescholar %}
  <div class="wordwrap">You can find my publications on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

<!---
{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
-->
