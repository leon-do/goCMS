# goCMS

A CMS using Google Docs (Experimental)

## Get Google Drive URL

In Google Docs, File > Publish to the web
![](https://imgur.com/BtuSUiu.png)

Copy Link
![](https://imgur.com/1x2VqvS.png)

## Server Side

`npm install gcms`

```javascript
const gocms = require('./gocms')

const url = 'https://docs.google.com/document/d/e/2PACX-1vR6ZWNXClovnICVSfMXgWnsOz8m_6SSMJre8eOhsJpplYqLHQIwG1G2RW0eu5pJQri_YD0Znvnel87t/pub'

gocms(url)
.then(html => {
  console.log(html)
})
```


## Client Side

```html
<script src="https://cdn.jsdelivr.net/gh/leon-do/goCMS/cdn/index.js"></script>

<div id="myDiv"></div>

<script>
  goCMS('myDiv', 'https://docs.google.com/document/d/e/2PACX-1vR6ZWNXClovnICVSfMXgWnsOz8m_6SSMJre8eOhsJpplYqLHQIwG1G2RW0eu5pJQri_YD0Znvnel87t/pub');
</script>
```

![](https://imgur.com/6blMBbL.png)

Your website
![](https://imgur.com/RxMHnv0.png)
