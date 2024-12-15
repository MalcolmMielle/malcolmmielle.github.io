---
title: ThermoNeRF
authors:
  - mariam
  - Florent Forest
  - Olga Fink
  - admin
date: 2024-03-18
publishDate: 2024-09-16T15:13:14.777988Z
publication_types:
  - manuscript
publication: "*arXiv*"
publication_short: ""
doi: ""
abstract: Thermal scene reconstruction exhibit great potential for applications across a broad spectrum of fields, including building energy consumption analysis and non-destructive testing. However, existing methods typically require dense scene measurements and often rely on RGB images for 3D geometry reconstruction, with thermal information being projected post-reconstruction. This two-step strategy, adopted due to the lack of texture in thermal images, can lead to disparities between the geometry and temperatures of the reconstructed objects and those of the actual scene. To address this challenge, we propose ThermoNeRF, a novel multimodal approach based on Neural Radiance Fields, capable of rendering new RGB and thermal views of a scene jointly. To overcome the lack of texture in thermal images, we use paired RGB and thermal images to learn scene density, while distinct networks estimate color and temperature information. Furthermore, we introduce ThermoScenes, a new dataset to palliate the lack of available RGB+thermal datasets for scene reconstruction. Experimental results validate that ThermoNeRF achieves accurate thermal image synthesis, with an average mean absolute error of 1.5C, an improvement of over 50% compared to using concatenated RGB+thermal data with Nerfacto, a state-of-the-art NeRF method.
summary: ""
tags:
  - sustainability
  - computer_vision
  - NeRF
  - thermal
featured: true
url_pdf: https://arxiv.org/pdf/2403.12154
url_code: https://github.com/Schindler-EPFL-Lab/thermo-nerf
url_dataset: https://zenodo.org/records/10835108
url_poster: ""
url_project: ""
url_slides: ""
url_source: ""
url_video: ""
image:
  caption: Summary
  focal_point: ""
  preview_only: true
projects:
  - INSULATED
links:
  - name: URL
    url: http://arxiv.org/abs/2403.12154
design:
  spacing:
    padding:
      - 0px
      - 0px
      - 0px
      - 0px
---

# Multimodal Neural Radiance Fields for Thermal Novel View Synthesis

![EPFL Pavillon](epfl_pavillon.gif)
![Cup](cup.gif)

**Authors**: Mariam Hassan, Florent Forest, Olga Fink, Malcolm Mielle

[PDF](https://arxiv.org/pdf/2403.12154)  [Code](https://github.com/Schindler-EPFL-Lab/thermo-nerf)  [Dataset](https://zenodo.org/records/10835108) [URL](http://arxiv.org/abs/2403.12154)

## Method

We propose a novel multimodal approach based on Neural Radiance Fields, capable of rendering new RGB and thermal views of a scene jointly.

![Summary](featured.png)

Thermal images are textureless and suffer from the ghosting effect.
To overcome the lack of texture in thermal images, we use paired RGB and thermal images to learn scene density, while distinct networks estimate color and temperature information.

![Architecture of the network](network.png)

Furthermore, we introduce [ThermoScenes](https://zenodo.org/records/10835108), a new dataset to palliate the lack of available RGB+thermal datasets for scene reconstruction.

## Results

Experimental results validate that ThermoNeRF achieves accurate thermal image synthesis, with an average mean absolute error of 1.5C, an improvement of over 50% compared to using concatenated RGB+thermal data with Nerfacto, a state-of-the-art NeRF method.