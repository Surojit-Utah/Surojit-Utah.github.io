---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

# Matching aggregate posteriors in the variational autoencoder
### (under preparation)
[PDF](http://surojit-utah.github.io/files/AVAE.pdf "PDF") [Code](https://github.com/Surojit-Utah/ARD-VAE "Code")

* The AVAE matches the aggregate posterior to the prior using kernel density estimate. 
* This method aims at filling-up holes in the latent space of the VAE and alleviate posterior collapse observed under certain training scenarios.
* An automated method for estimating KDE bandwidth.
* Address the bias in the estimated bandwidth that encourages using KDE in high dimensional latent spaces (dimensions > 100).
* The regularization scalar $$\beta$$ is updated during training using the proposed heuristic. Thus, the AVAE is free from tuning the hyper-parameter, $$\beta$$.
* The use of the diagonal covariance in the posterior distribution, $$q_{\phi}(\mathbf{z} \mid \mathbf{x})$$, in the VAE helps in learning disentangled representations in an unsupervised framework. However, the AVAE is free from such modeling assumptions, and thus, the latent axes do not represent the generative factors of a dataset, unlike the VAE.
* We propose a technique to discover the latent factors of a dataset using the learned representations of the AVAE.

<!---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

-->
