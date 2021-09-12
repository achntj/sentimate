---
layout: default
title: About
permalink: /about/
---


  <h2>About the Project</h2>
    <p>
      Today, more than <a href="https://www.who.int/news-room/fact-sheets/detail/depression#:~:text=Depression%20is%20a%20common%20mental,overall%20global%20burden%20of%20disease.">250 million</a>
      people suffer from depression. And it is apparent that there are many more people who might be suffering from
      depression but either don't know that yet or don't believe it. Mental Health Awareness is crucial for tackling this, and so is a way to
      accurately and efficiently detect depression within seconds.
      <br />
      SentiMate, short for 'Sentiment Mate', is a machine learning model that can identify depression using text with an
      accuracy of over 96%. SentiMate doesn't come as a replacement of professionals in this field, but it complements them.
      By detecting the likelihood of depression, users can contact therapists and doctors to understand the problem as well as the
      way out.
    </p>

  
  <h2>The Idea</h2>
    <p>
      During my time as a volunteer at <a target="_blank" href="https://zenonco.io">Zenonco</a> ("The World’s First Integrative
      Oncology Healthtech Platform"), I got to know that patients suffering from cancer constantly faced bad
      mental health as well. I wrote <a target="_blank" href="https://zenonco.io/healing-circle-talks-with-dr-vidhya-nair">this</a>
      article, which summarised Dr. Vidhya Nair's talk on the relation between Cancer and Mental Health.
      Mental Health affects our recovery from diseases and it is necessary to stay happy and mentally strong during
      these times.
      And as discussed earlier, it is important to detect depression before any further harm.
      Therefore, I looked up a few ways to detect depression and other causes of poor mental health, but all I found was a bunch of
      surveys that predicted the results based on the number of "positive" answers, i.e, answers that could be associated with 
      depression.
      I started SentiMate as a research project that focused on finding a better way to detect depression. After about 6 months,
      I finished writing a 15 page paper on my research (publishing soon), and had a model ready; I then deployed the model with a few
      adjustments, which is now available at <a href="/model">this</a> page. The concept of this model is too replace traditional
      surveys with a more logical and efficient approach. 
    </p>
  <hr>

  <h2>The Founder</h2>

  <div class="image-container-me">
    <img src="{{ url_for('static', filename='me.jpeg') }}" alt="Picture of Achintya Jha">
  </div>
  <h3 style="text-align:center">Founder, Achintya Jha</h3>

  <p>
    Achintya Jha is a class 12 student at Ahlcon International School, where he 
    is studying Science along with Computer Science. He is also the academic secretary
    of the Student Council and part of the organizing team of various annual CS
    events held in the school.
    He believes that innovations and ideas must be made accessible to all at minimum
    costs. He has developed <a href="https://stuclan.ml">StuClan</a> and 
    <a href="https://sentimate.herokuapp.com/">SentiMate</a> after close to 2 years of research.
    He aims to make these platforms available to everyone for zero cost, and for this, he is 
    working on scaling this project further. He would be beyond grateful, if you could <a target="_blank" href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fsentimate.herokuapp.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Guys%20have%20a%20look%20at%20SentiMate!!%20It%20can%20detect%20depression%20using%20text!!&url=https%3A%2F%2Fsentimate.herokuapp.com&via=achintyajha05">share</a> this 
    website with your friends.
  </p>

  <hr>

  <h2>Development</h2>
  <p>
    This project uses 2 separate models for predictions. Both models are
    based on separate datasets, and do best when used together. The first
    model uses a general dataset containing 1.6 million tweets, while the
    other dataset has over 20 thousand tweets which are specifically scraped
    so as to be related to depression. Together, these datasets have been
    used for training 2 sets of vocabularies, and subsequently, training 2
    models. Of all suitable machine learning models for this project,
    Logistic Regression, performs the best.
    <br />
    <br />
    So, with 2 custom vocabularies and logistic regression models, this
    model, classifies the text into positive and negative categories.
    However, as you might expect, there is a lot more going on than that.
    The language processing and feature engineering methods used have been
    covered in depth in my paper, which I will be releasing soon.
    <br />
    <br />
    If you still wish to know more, consider dropping an email at -
    [achintyakjha] at [gmail] dot [com].
  </p>

