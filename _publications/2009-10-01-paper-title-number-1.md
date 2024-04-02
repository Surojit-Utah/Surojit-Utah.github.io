---
title: "Matching aggregate posteriors in the variational autoencoder"
collection: publications
permalink: /publication/2009-10-01-paper-title-number-1
#excerpt: ''
#date: 2009-10-01
venue: 'Under preparation'
paperurl: 'http://academicpages.github.io/files/AVAE.pdf'
#citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---

* The AVAE matches the aggregate posterior to the prior using kernel density estimate. 
* This method aims at filling-up holes in the latent space of the VAE and alleviate posterior collapse observed under certain training scenarios.
* An automated method for estimating KDE bandwidth.
* Address the bias in the estimated bandwidth that encourages using KDE in high dimensional latent spaces (dimensions > 100).
* The regularization scalar $\beta$ is updated during training using the proposed heuristic. Thus, the AVAE is free from tuning the hyper-parameter, $\beta$.
* The use of the diagonal covariance in the posterior distribution, $q_{\phi}(\mathbf{z} \mid \mathbf{x})$, in the VAE helps in learning disentangled representations in an unsupervised framework. However, the AVAE is free from such modeling assumptions, and thus, the latent axes do not represent the generative factors of a dataset, unlike the VAE.
* We propose a technique to discover the latent factors of a dataset using the learned representations of the AVAE.
