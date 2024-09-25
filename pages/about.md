# About the Project

Today, more than [250 million](https://www.who.int/news-room/fact-sheets/detail/depression#:~:text=Depression%20is%20a%20common%20mental,overall%20global%20burden%20of%20disease.)
people suffer from depression. And it is apparent that there are many more who might be suffering, but either don't know about it or don't believe it. Mental Health Awareness is crucial for tackling this, and so is a way, to accurately and efficiently detect depression within seconds.

SentiMate, short for 'Sentiment Mate', is a machine learning model that can identify depression using text with an accuracy of over 96%. SentiMate doesn't come as a replacement for professionals in this field, but rather it complements their work. By detecting the likelihood of depression, users can contact therapists and doctors to understand the problem as well as the
way out.

## The Idea

During my time as a volunteer at [Zenonco](https://zenonco.io) ("The World’s First Integrative Oncology Healthtech Platform"), I got to know that patients suffering from cancer constantly faced bad mental health, and most of the times never knew about it. I wrote [this](https://zenonco.io/healing-circle-talks-with-dr-vidhya-nair) article, which summarised Dr. Vidhya Nair's talk on the relation between Cancer and Mental Health. Mental Health affects our recovery from diseases and it is necessary to stay happy and mentally strong during
these times. Thus, a tool to detect depression is essential; So, I looked up a few ways to detect depression and other causes of poor mental health, but all I found was a bunch of **_surveys_** that predicted the results based on the number of "positive" answers, i.e, answers that could be associated with depression. I started SentiMate as a research project that aimed to find a better way to detect depression. After about 6 months, I finished writing a 15 page paper on my research (publishing soon), and had a model ready; I then deployed the model with a few adjustments, which is now available online. The concept of this model is to replace traditional surveys with a more logical and efficient approach.

_~Achintya Jha_

<!-- ---

## Our Founder

![]({{ site.baseurl }}/me.jpeg)
_Founder & Developer, Achintya Jha_

[Achintya Jha](https://achintyajha.in) is a class 12 student at Ahlcon International School, where he is studying the sciences along with Computer Science. He believes that innovation and ideas must be made accessible to all at no costs, and he is working to accomplish the same. His experience with tech has allowed him to develop solutions in the intersection of tech and society. He has developed [StuClan](https://talk.sentimate.org) and [SentiMate](https://sentimate.org) after close to 2 years of research and aims to make these platforms available to everyone, for which, he is working on scaling this project further.

He has worked as a research intern at companies like Tech Mahindra and has volunteered at organisations like SEETalks, HappyPlus, ZenOnco and many others. For him, these experiences have revealed various problems and stigmas in the society, including mental health, and have encouraged him to come up with innovative solutions.

He would be beyond grateful, if you could [share](https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fsentimate.org%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Guys%20have%20a%20look%20at%20SentiMate!!%20It%20can%20detect%20depression%20using%20text!!&url=https%3A%2F%2Fsentimate.org&via=achintyajha05) this website with your friends or send your feedback about the model and StuClan.

---

## Director of Operations

![]({{ site.baseurl }}/ishaan.jpeg)
_Ishaan Shaurya Chamoli_

[Ishaan](www.linkedin.com/in/ishaanchamoli) is a junior year student at Ridge Valley School from Gurgaon, India working towards combining his interest in Computer Science (especially Artificial Intelligence) and urge to help society with the limitless possibilities he believes AI can achieve.
He loves to innovate and bring his ideas to life with the hopes of making as much of an impact as possible!

His initial interest in solving problems faced across the world, including mental health, started as he was exposed to discussions and research on global problems combatted by the United Nations through over 4 years and 50+ conferences of participation in Model UN as a Delegate, Trainer, and Collegiate Chairperson. That’s when he began solving the problems that touched him most with the help of technology and artificial intelligence.

Recently, Ishaan has also been conferred with Intel’s Global AI Enthusiast Award representing India as part of the International Top 10 Innovations for societal development from over 30 participating nations, alongside being a Global Finalist and the Country Winner for his idea on Refugee Relocation through AI Mapping.
In the past, he has also been invited to the prestigious Indian Institute of Technology (IIT), Kharagpur for presentation and received a prototyping grant by the Indian Government’s Dept. of Science and Technology for his technological innovations aimed at benefitting the community.
Fitting this combination of impacting society, research, and AI-oriented technological innovation perfectly with the organisation’s ideals, Ishaan serves as the Head of all Operations at SentiMate. -->

## Development

This project uses 2 separate models for predictions. Both models are based on separate datasets, and do best when used together. The first model uses a general dataset containing 1.6 million tweets, while the other dataset has over 20 thousand tweets which are specifically scraped so as to be related to depression. Together, these datasets have been used for training 2 sets of vocabularies, and subsequently, training 2 models. Of all suitable machine learning models for this project, Logistic Regression, performs the best.

So, with 2 custom vocabularies and logistic regression models, this model, classifies the text into positive and negative categories.
However, as you might expect, there is a lot more going on than that. The language processing and feature engineering methods used have been
covered in depth in my paper, which I will be releasing soon.

If you still wish to know more, consider dropping an email at -
[achintyakjha] at [gmail] dot [com].
