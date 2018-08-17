English Version Link : [영어 버전](DataVisualizationReport(Eng).md)  
[보고서 쓰면서 만든 웹사이트](Data_Visualization/DataVisualization.html)  

# Data Visualization Report
기존 데이터시각화 웹 프레임워크 분석
* 얼마나 많은 차트 유형을 제공하는가?
* 동일한 차트(막대, 원그래프 등)의 예제 코드를 직접 작성해 제시
* 응용코드를 만드는데 얼마나 많은 학습이 필요한가? 개발 난이도는 어떠한가?
* 실행되는 속도는 다른 프레임워크에 비해 어떠한가?
* 문서화는 어느정도 지원되고 있는가?
* 장점과 단점을 짧게 요약

**이 보고서는 아래와 같은 버전의 프레임워크를 기준으로 쓰여졌습니다.**  

  | Framework Name | Version |
  |:--------------:|:-------:|
  |      D3.js     |    v4   |
  |   Echarts.js   |  v4.1.0 |
  |    Toast.js    |  v3.3.1 |
  |    Chart.js    |  v2.7.2 |
  |  billboard.js  |  v1.5.1 |

## 시각화 웹 프레임워크 비교
---
결론부터 말하자면, 비교결과는 아래와 같다.
* 실행속도(빠른 순서) : **D3.js > Chart.js > echarts.js >= billboard.js > Toast.js**

    | Rank | Framework Name | Average Execution time |
    |:----:|:--------------:|:----------------------:|
    |   1  |      D3.js     |         3~10ms         |
    |   2  |    Chart.js    |         11~40ms        |
    |   3  |   Echarts.js   |        62~122ms        |
    |   4  |  billboard.js  |        83~159ms        |
    |   5  |    Toast.js    |        103~181ms       |  
* 개발 난이도(쉬운 순서) : **Chart.js == billboard.js >= Toast.js >= echarts.js > D3.js**

    | Rank | Framework Name | Learning Curve |
    |:----:|:--------------:|:--------------:|
    |   1  |    Chart.js    |     Shallow    |
    |      |  billboard.js  |     Shallow    |
    |   2  |    Toast.js    |     Shallow    |
    |      |   Echarts.js   |     Shallow    |
    |   3  |      D3.js     |      Steep     |
* 문서화 정도(잘 되어있는 순서) : **billboard.js > echarts.js == Toast.js == chart.js == D3.js**

    | Rank | Framework Name | Well-organized |
    |:----:|:--------------:|:--------------:|
    |   1  |  billboard.js  |     Good       |
    |   2  |   Echarts.js   |     Fair       |
    |      |    Toast.js    |     Fair       |
    |      |    Chart.js    |     Fair       |
    |      |      D3.js     |     Fair       |
* 차트의 다양성 : **D3.js > echarts.js > Toast.js > chart.js >= billboard.js**

    | Rank | Framework Name | Implementation Flexibility |
    |:----:|:--------------:|:--------------------------:|
    |   1  |      D3.js     |        Very Flexible(You can draw as you like)      |
    |   2  |   Echarts.js   |          Flexible(Chart, Maps, 3D Maps, etc..)          |
    |   3  |    Toast.js    |    Flexible(Chart, Maps)   |
    |   4  |    Chart.js    |      Fair(Only charts)     |
    |   5  |  billboard.js  |      Fair(Only charts)     |

## 각 웹 프레임워크의 실행속도 비교
---
console.time과 console.timeEnd API를 이용해 Bar, Pie, Bubble, Line 차트별로 속도를 측정해보았다.
```
1. Bar Chart
  d3.js : 3~9ms
  chart.js : 19~40ms
  billboard.js : 90~130ms
  echarts.js : 68~110ms
  toast.js : 103~161ms  
```

![Bar](/HohyunJun/img/BarChartExecSpeedCompare.png) 

```
2. Pie Chart
  d3.js : 3~9ms
  chart.js : 11~22ms
  billboard.js : 85~115ms
  echarts.js : 62~105ms
  toast.js : 139~181ms
```

![Pie](/HohyunJun/img/PieChart_Exec_Speed_Compare.png) 

```
3. Bubble Chart
  d3.js : 6~10ms
  chart.js : 21~33ms
  billboard.js : 97~159ms
  echarts.js : 70~99ms
  toast.js : 116~150ms
```

![Bubble](/HohyunJun/img/BubbleChart_Exec_Speed_Compare.png) 

```  
4. Line Chart
  d3.js : 6~11ms
  chart.js : 23~35ms
  billboard.js : 83~122ms
  echarts.js : 86~122ms
  toast.js : 114~159ms
```

![Line](/HohyunJun/img/LineChart_Exec_Speed_Compare.png) 

물론 각 프레임워크별로 정확하게 똑같은 차트를 그리지는 않았지만, 실행속도에 있어서 유의미한 차이를 보이는 것을 알 수 있다.  
실행속도는 D3가 가장 빠르고, 두번째는 Chart.js, 세번째는 echarts.js, 네번째는 billboard.js, 끝으로는 Toast.js 가 가장 느렸다.  
**즉, 실행속도가 빠른 순서로 D3 > Chart.js > echarts.js >=billboard.js > Toast.js**  
그리고 각 차트 종류별로는 실행속도의 차이가 크게 나지 않았다.  
*echarts.js의 경우 renderer를 svg와 canvas로 바꾸는 것에 큰 실행속도 차이는 없었다.*  

## D3.js
---
  ```
  구현 편의성 : 하  
  구현 난이도 : 상  
  구현의 유연성 : 상
  실행 속도 : 빠름  
  SVG 기반
  ```
  ### 1. 얼마나 많은 차트 유형을 제공하는가?
  Bar Chart, Histogram, Pareto, Line and Area Chart, Pie Chart, ScatterPlot and Bubble Chart 등 셀 수 없을 만큼    
  많은 차트 유형을 제공한다. 차트 뿐만 아니라 지도 등의 다양한 시각화 자료들을 만들 수 있다.    
  [D3 갤러리](https://github.com/d3/d3/wiki/Gallery) 

  ### 2. 응용코드를 만드는데 얼마나 많은 학습이 필요한가? 개발 난이도는 어떠한가?
  응용코드를 만드는데 다른 시각화 프레임워크에 비해 많은 학습이 필요하다. 개발 난이도도 높은 편이다.  

  ### 3. 문서화 지원 정도
  [D3 튜토리얼](https://github.com/d3/d3/wiki/Tutorials)     
  Tutorial의 자료가 굉장히 많고 잘 정리되어 있다.    
  학습할 내용이 어려워서 그렇지 학습을 위한 자료들은 매우 잘 되어 있다.  

  ### 4. 장점  
  직접적으로 그래프를 그리는 도구이기 때문에 그래프나 시각화를 폭넓게 구현할 수 있다.(원하는 대로 그릴 수 있다.)  
  브라우저 내장 요소 검사기를 활용해서 쉽게 디버깅을 할 수 있다.    
  그냥 SVG 태그를 사용해서 구현하는 것보다 훨씬 간편하게 SVG 태그를 활용하는 구현을 할 수 있도록 도와준다.  
  다른 시각화 웹 프레임워크들에 비해서 속도가 유의미하게 빠르다.  

  ### 5. 단점
  사용법이 굉장히 복잡하다. SVG 기반이므로 그래프의 좌표를 하나하나 다 따져서 그려야 하므로 난이도가 높고 시간이 많이 소요된다.  
  최신 표준 기술을 지원하는 IE8+ 웹 브라우저에서만 구동된다.  
  똑같은 그래프를 구현하더라도 다른 라이브러리에 비해 코드가 길고 이해하기 힘들다.  

## Chart.js
---
  ```
  구현 편의성 : 상  
  구현 난이도 : 하  
  구현의 유연성 : 중  
  Canvas 기반  
  ```
  ### 1. 얼마나 많은 차트 유형을 제공하는가?
  차트의 종류는 충분히 다양하지만, D3.js 만큼 다양하지는 않다.
  또한, D3는 차트 뿐만 아니라 다른 다양한 시각화 자료를 만들 수 있지만,  
  Chart.js는 오직 차트를 만드는 것에 특화되어 있다.
  
  ### 2. 응용코드를 만드는데 얼마나 많은 학습이 필요한가? 개발 난이도는 어떠한가?
  Chart.js에서 정해진 API 틀에 사용자가 원하는 데이터나 옵션을 넣기만 하면 원하는 차트를 쉽게 그릴수 있다.
  간단한 차트를 만드는 데 많은 학습이 필요하지 않다.
  개발 난이도는 낮다고 볼 수 있다.

  ### 3. 문서화 지원 정도
  D3.js 보다 문서화가 좀 더 구조화되어 있다.  
  D3.js 의 경우에는 Github에 문서화 자료가 지원되었다면, Chart.js는 튜토리얼을 위한 별도의 웹페이지를 제공하여,  
  사용 시 더 보기 쉽고 구조화되어 있다는 느낌을 받았다.  
  다만, D3.js나 billboard.js에서는 Example에 대한 Sample code를 쉽게 볼 수 있었던 반면,  
  Chart.js의 경우는 Example의 Sample Code를 공식 웹페이지에서 찾아보기 힘들었다.  
  
  ### 4. 장점
  정해진 API를 참조하여 원하는 그래프를 쉽고 빠르게 만들 수 있다.  
  사용법이 직관적이고 문서화도 잘 되어 있다.    
  Canvas 기반이기 때문에 반응형 레이아웃도 문제없다.
  세부적인 커스터마이징도 쉬운 편.  
  사용자가 많아서 구글링을 통해 왠만하면 다 해결할 수 있다.  

  ### 5. 단점
  Canvas 기반이라 웹페이지를 확대/축소했을 때, 그래프 깨짐 현상이 발생한다.
  D3.js에 비해서 구현의 유연성이 떨어진다.


## billboard.js
---
  ```
  구현 편의성 : 상  
  구현 난이도 : 하  
  구현의 유연성 : 중  
  D3 기반 (SVG) 
  ```
  version 4 이상의 D3를 기반으로 하며, 정해진 양식에 맞추어 데이터를 넣기만 하면 원하는 그래프롤 쉽게 만들 수 있다. 

 ### 1. 얼마나 많은 차트 유형을 제공하는가?
 Chart.js 와 마찬가지로 충분히 다양한 종류의 차트 유형을 제공한다.  
 차트를 만드는 것에 특화되어 있는 웹 프레임워크이다.

 ### 2. 응용코드를 만드는데 얼마나 많은 학습이 필요한가? 개발 난이도는 어떠한가?
 Chart.js와 비슷한 난이도이다.  
 정해진 API에 원하는 데이터와 차트 종류 등의 옵션을 정해주기만 하면 손쉽게 차트를 그릴 수 있다.  
 난이도는 쉬움.  

 ### 3. 문서화 지원 정도
 다른 웹 프레임워크들과 비교해 가장 이해하기 쉽고 문서화가 잘 되어 있었다.  
 각각의 API들에 대한 Documentation은 물론, Example 들에 대한 Sample Code들도 별도의 웹페이지를 통해 보기 쉽게 제공되었다.  
 하지만 가장 마음에 들었던 것은 PlayGround 였는데, 제공되는 모든 API를 ON/OFF 할 수 있도록 웹 페이지를 만들어 놓고,  
 사용자가 직접 코드를 수정하면서 차트가 어떻게 변화하는지 한 눈에 볼 수 있도록 되어 있었다.  
 직접 차트 옵션들을 바꿔보면서 각 API에 대한 이해를 쉽게 할 수 있었다.  

 ### 4. 장점
   정해진 API를 참조하여 원하는 그래프를 쉽고 빠르게 만들 수 있다.  
    필요로 하는 API를 찾는 것이 다른 라이브러리보다 쉽다. [Billboard.js 문서화 자료](https://naver.github.io/billboard.js/)에서  
    Example이나 Playground를 통해 쉽게 원하는 API를 찾을 수 있도록 구성되어 있었다.  
    특히, Playground에서 Size, SVG, Transition 등의 목차별 API를 클릭 한번으로 직접 적용해 볼 수 있도록 하는 것이 좋았다.  
    [Billboard.js PlayGround](https://naver.github.io/billboard.js/playground/)  

 ### 5. 단점
  D3를 기반으로 하기 때문에, billboard.js를 사용하기 위해서는 D3의 자바스크립트 파일도 로드해야만 한다.  
  D3나 Chart.js 보다 속도 측면에서 느리다.  
  만들어진지 얼마 되지 않은 라이브러리라 구글링 검색 결과가 많이 뜨지 않는다.  
  D3.js에 비해서 구현의 유연성이 떨어진다.

## Echarts.js
---
  ```
  구현 편의성 : 중
  구현 난이도 : 하
  구현의 유연성 : 중
  Canvas 기반이지만 Renderer를 SVG로 변경 가능하다.
  ```
  [SVG나 Canvas 렌더링에 대한 문서화 자료](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Render%20by%20Canvas%20or%20SVG)   
  Echarts는 Default로는 Canvas를 사용하지만, 인자로 renderer를 명시해주면 변경 가능하다.  
  var chart = echarts.init(containerDom, null, {renderer: 'svg'}); 형태  

 ### 1. 얼마나 많은 차트 유형을 제공하는가?
 기본적인 차트 유형들 뿐만 아니라, 지도나 3D 그래픽까지도 만들 수 있다.  
 D3 만큼은 아니지만, Chart.js나 Billboard.js 보다는 더 다양한 구현이 가능해 보인다.  

 ### 2. 응용코드를 만드는데 얼마나 많은 학습이 필요한가? 개발 난이도는 어떠한가?
 Chart.js 나 Billboard.js 와 마찬가지로 정해진 API에 원하는 옵션을 넣기만 하면 되는데,  
 Chart.js 나 Billboard.js 보다는 직관성이 떨어진다는 느낌을 받았다.  
 하지만 개발 난이도가 그렇게 어렵진 않다. 쉬움.

 ### 3. 문서화 지원 정도
 처음 Echart.js를 시작하는 것부터 Event와 그에 대한 차트 Action을 주는 것까지,  
 단계별로 문서화가 잘 되어 있었다. 또한, 굉장히 많은 Example 들과 그에 대한 Sample Code도  
 주어져 있어 이해하는 데 도움이 되었다. 각 API에 대한 문서화도 자세하게 되어 있었다.  
 아쉬운 것이 있었다면, 각 API 옵션들을 직접 바꾸면서 확인해볼 수 있는 Billboard.js 의   
 Playground와 같은 기능이 없다는 것이었다.

 ### 4. 장점
 API에 옵션만 지정해 주면 간단히 차트를 그릴 수 있다는 Chart.js 나 Billboard.js의 장점에 더해서,  
 SVG나 Canvas를 상황에 따라 더 나은 것으로 Rendering 해서 사용할 수 있다는 것이 가장 큰 장점이라고 생각된다.  
 개발자의 의도나 데이터의 양, 개발환경에 따라 둘 중 적합한 것을 선택할 수 있다.  
 또한, Chart.js 나 Billboard.js 보다 더 다양한 종류의 차트를 제공한다.  
 차트를 이미지 형태로 저장하는 버튼 등도 API를 활용하여 3줄의 코드로 만들 수 있다.    

 ### 5. 단점
 Chart.js나 Billboard.js 보다는 API의 직관성이 떨어진다는 느낌을 받았다.  
 D3를 제외한 시각화 라이브러리 중 Chart.js 다음으로 github star가 많았는데, 이 star 개수에 비해
 Googling 했을 때 검색결과가 많이 나오지는 않는다.  
 SVG와 Canvas 간의 Rendering 기능이 아직 완벽하게 작동하지는 않는 것 같다.  
 Bubble Chart 페이지를 SVG로 렌더링해 보았는데, 외형적으로는 Canvas 형태와 동일하게 나타나지만,  
 마우스 커서를 올렸을 때 글자 크기가 비정상적으로 크게 나타나는 오류가 발생했다.  
 찾아보니 SVG 렌더러는 *베타 버전*이라고 한다.

## Toast.js
---
  ```
  구현 편의성 : 상  
  구현 난이도 : 하  
  구현의 유연성 : 중  
  raphael.js 기반(SVG)
  ```
  raphael.js를 기반으로 하며, 정해진 양식에 맞추어 데이터를 넣기만 하면 원하는 그래프롤 쉽게 만들 수 있다. 

 ### 1. 얼마나 많은 차트 유형을 제공하는가?
 다른 차트 라이브러리와 마찬가지로 충분히 다양한 종류의 차트 유형을 제공한다.  
 차트에 더해, Map유형을 만드는 것도 지원한다.

 ### 2. 응용코드를 만드는데 얼마나 많은 학습이 필요한가? 개발 난이도는 어떠한가?
 Chart.js와 비슷한 난이도이다.  
 정해진 API에 원하는 데이터와 차트 종류 등의 옵션을 정해주기만 하면 손쉽게 차트를 그릴 수 있다.  
 난이도는 쉬움.  

 ### 3. 문서화 지원 정도
 billboard.js를 제외한 다른 웹 프레임워크들과 비슷한 정도.   
 만들고자 하는 차트별로 API를 분류하여 링크 목록을 주는 것이 좋았음.  
 [Toast.js 문서화](https://nhnent.github.io/tui.chart/latest/RaphaelRadialLineSeries.html)  

 ### 4. 장점
   정해진 API를 참조하여 원하는 그래프를 쉽고 빠르게 만들 수 있다.    
   특별한 옵션을 주지 않더라도 그래프 옆에 버튼이 생겨서 xls, csv, png, jpeg 파일 등으로 Export 기능을 제공해 줄 수 
   있다는 것이 좋았다. 

 ### 5. 단점
  raphael.js 기반으로 하기 때문에, billboard.js를 사용하기 위해서는 raphael.js의 자바스크립트 파일도 로드해야만 한다.  
  D3를 기반으로 하는 billboard.js보다도 속도가 느리다. 다른 웹 프레임워크들과 비교했을 때 유의미하게 속도차이가 난다.
  
