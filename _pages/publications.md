---
layout: archive
title: "Projects"
permalink: /publications/
author_profile: true
---

# ARD-VAE: A Statistical Formulation to Find the Relevant Latent Dimensions of Variational Autoencoders 
<!---
---
citation: 'Surojit Saha, Ross Whitaker. (2024). &quot; Matching aggregate posteriors in the variational autoencoder.&quot; <i>ICPR </i>.'
---
-->
***(under review)***<br />
[PDF](http://surojit-utah.github.io/files/ARD_VAE.pdf "PDF") [Code](https://github.com/Surojit-Utah/ARD-VAE "Code")

* We propose the ARD-VAE to discover relevant axes in the VAE using a hierarchical prior without modification of the ELBO in the VAE.
* The ARD-VAE is insensitive to the choice of the autoencoder architecture and optimization strategies.
* Empirical evaluations demonstrate the effectiveness of the ARD-VAE in modeling data distributions and finding relevant generative factors.

<br />
<br />
# AdaSemSeg: An Adaptive Few-shot Semantic Segmentation of Seismic Facies 
<!---
---
citation: 'Surojit Saha, Ross Whitaker. (2024). &quot; An Adaptive Few-shot Semantic Segmentation of Seismic Facies.&quot; <i>ICPR </i>.'
---
-->
***(under review)***<br />
[PDF](http://surojit-utah.github.io/files/AdaSemSeg.pdf "PDF") [Code](https://github.com/Surojit-Utah/AdaSemSeg "Code")

* We propose an adaptive FSSS method for identifying seismic facies that is flexible to handle the variability in the number of facies across datasets. 
* Initialization of the image encoder using contrastive learning helps improve the AdaSemSeg’s performance.
* The performance of the AdaSemSeg evaluated on target datasets without refinement is comparable to the baselines.
* The AdaSemSeg comprehensively outperforms the prototype-based FSSS method and the segmentation model trained using transfer learning.

<br />
<br />
# Matching aggregate posteriors in the variational autoencoder 
<!---
---
citation: 'Surojit Saha, Ross Whitaker. (2024). &quot; Matching aggregate posteriors in the variational autoencoder.&quot; <i>ICPR </i>.'
---
-->
***(under preparation)***<br />
[PDF](http://surojit-utah.github.io/files/AVAE.pdf "PDF") [Code](https://github.com/Surojit-Utah/AVAE "Code")

* The AVAE matches the aggregate posterior to the prior using kernel density estimate. 
* This method aims at filling-up holes in the latent space of the VAE and alleviate posterior collapse observed under certain training scenarios.
* An automated method for estimating KDE bandwidth.
* Address the bias in the estimated bandwidth that encourages using KDE in high dimensional latent spaces (dimensions > 100).
* The regularization scalar $$\beta$$ is updated during training using the proposed heuristic. Thus, the AVAE is free from tuning the hyper-parameter, $$\beta$$.
* The use of the diagonal covariance in the posterior distribution, $$q_{\phi}(\mathbf{z} \mid \mathbf{x})$$, in the VAE helps in learning disentangled representations in an unsupervised framework. However, the AVAE is free from such modeling assumptions, and thus, the latent axes do not represent the generative factors of a dataset, unlike the VAE.
* We propose a technique to discover the latent factors of a dataset using the learned representations of the AVAE.

{% if site.author.googlescholar %}
  <div class="wordwrap">You can find my publications on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

<!---
{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
-->
