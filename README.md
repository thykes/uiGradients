<p align="center">
  <img src="https://www.dropbox.com/s/8e17cyl1xlg74e5/logo.svg?raw=1" width="180px">
</p>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/crafted%20with-love-E760A4.svg" alt="Crafted with love">
  </a>
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  </a>
  <a href="https://github.com/ghosh/uiGradients/graphs/contributors" target="_blank">
    <img src="https://img.shields.io/github/contributors/ghosh/uigradients.svg" alt="Contributors">
  </a>
  <a href="https://api.travis-ci.org/ghosh/uiGradients" target="_blank">
    <img src="https://api.travis-ci.org/ghosh/uiGradients.svg" alt="Build Status">
  </a>
</p>

<p align="center">
uiGradients is a community contributed collection of beautifull multi-color gradients
</p>

---

## About
This is an effort to give back to the community, by the community. Hopefully this will help you draw inspiration and serve as a resource for picking gradients for your own projects.

## Contributing
Adding a gradient to the library is super simple. All the gradients are loaded and rendered from a single gradients.json file in the root.

To add your gradient, fork this repository, add your gradient colours in the HEX format along with a name to the end of the json file and submit a pull request. Don't forget the commas!

```
[
    {
        …
    }, // <-- Do not forget this comma
    {
      "name": "Career", // <-- and this comma too
      "colors": ["#cb202d", "#DC1E28", "#3366cc"]
    }
]
```

Please keep gradient submissions and bug fixes in separate PRs.



### Improvements and Bugs
Please feel free to open a new issue here with your suggestions or any bugs which you may have come across. 



## JSON Data
The gradients data can be fetched in json directly from the gradients.json file.
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json
```



## Built with uiGradients
A few open source projects built with uiGradients
- [UIColor-uiGradientsAdditions](https://github.com/kaiinui/UIColor-uiGradientsAdditions) - uiGradients for iOS
- [NilColorKit](https://github.com/NilStack/NilColorKit) - uiGradients made for swift
- [uigradients](https://github.com/JSBros/uigradients) - Styled components for uiGradients
- [uigradients-scss](https://github.com/subinsebastian/uigradients-scss) - uiGradients ported to scss
- [helper-uigradient](https://github.com/helpers/helper-uigradient) - Handlebar helper for uiGradients

---


<p align="center">✌️</p>
<p align="center">
<small>A little project by <a href="https://twitter.com/_ighosh">@i_ghosh</a></small>
</p>