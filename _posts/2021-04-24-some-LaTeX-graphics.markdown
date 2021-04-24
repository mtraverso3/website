---
layout: post
title:  "Some LaTeX renders"
date:   2021-04-24 3:50:00 -0700
---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_CHTML">
</script>

<div style="display:none">
$$ 
\newcommand\cast[2]{
    \text{cast}_{\text{#1} \rightarrow \text{#2}}
} 
\newcommand\trueOrNull[1]{
  \text{if}(#1 \text{ is null}, \text{null}, \text{true})
} 
\newcommand\falseOrNull[1]{
  \text{if}(#1 \text{ is null}, \text{null}, \text{false})
} 
$$
</div>

$$
\begin{equation}
s_1 = s_2 \quad \Rightarrow \quad \cast{S}{T}(s_1) = \cast{S}{T}(s_2) \\
s_1 < s_2 \quad \Rightarrow \quad \cast{S}{T}(s_1) < \cast{S}{T}(s_2) \\
s_1 > s_2 \quad \Rightarrow \quad \cast{S}{T}(s_1) > \cast{S}{T}(s_2)
\end{equation}
$$
<br/>
$$
\begin{equation}
x = a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2 + \cfrac{1}{a_3 + \cfrac{1}{a_4} } } } 
\end{equation}
$$
<br/>
$$
A_{m,n} =
\begin{pmatrix}
a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
\vdots  & \vdots  & \ddots & \vdots  \\
a_{m,1} & a_{m,2} & \cdots & a_{m,n}
\end{pmatrix}
$$