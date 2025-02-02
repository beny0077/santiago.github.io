import{Ba as e,Ea as m,Q as a,va as t,wa as n}from"./chunk-TXDHCQSB.js";var l=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=a({type:r,selectors:[["app-ai-summarizer"]],standalone:!0,features:[m],decls:202,vars:0,consts:[[1,"ai-summarizer-container"],[1,"overview"],[1,"tech-stack"],[1,"key-features"],[1,"project-components"],[1,"component"],[1,"language-python"],[1,"language-json"],[1,"approach-process"],[1,"results"],[1,"lessons-learned"],[1,"future-work"]],template:function(i,o){i&1&&(t(0,"div",0)(1,"h1"),e(2,"AI Note Summarizer"),n(),t(3,"section",1)(4,"h2"),e(5,"Overview"),n(),t(6,"p"),e(7,"I developed this project to summarize long technical documents and notes into key highlights while maintaining essential information. This avoids the hassle of using external AI services (e.g., subscriptions, over-explanation), so instead, I created my own summarization AI tool for concise notes with actionable insights. I use this mostly for extracting key information from technical notes, but it works well with notes that have sequences or even extracting key details from guides."),n()(),t(8,"section",2)(9,"h2"),e(10,"Tech Stack"),n(),t(11,"ul")(12,"li")(13,"strong"),e(14,"Backend:"),n(),e(15," Python, Flask, Hugging Face Transformers (T5 Model)"),n(),t(16,"li")(17,"strong"),e(18,"Frontend:"),n(),e(19," React, HTML, CSS"),n(),t(20,"li")(21,"strong"),e(22,"Libraries:"),n(),e(23," NLTK, SacreBLEU, ROUGE scorer"),n(),t(24,"li")(25,"strong"),e(26,"Storage & Configuration:"),n(),e(27," JSON-based configuration for hyperparameters"),n()()(),t(28,"section",3)(29,"h2"),e(30,"Key Features"),n(),t(31,"ul")(32,"li"),e(33,"Hyperparameter tuning using grid search."),n(),t(34,"li"),e(35,"REST API for summarization."),n(),t(36,"li"),e(37,"Summarization of text files."),n(),t(38,"li"),e(39,"Evaluation metrics (ROUGE, BLEU, METEOR) for summary quality."),n(),t(40,"li"),e(41,"Stores grid search metrics in a CSV document for hyperparameter tuning."),n(),t(42,"li"),e(43,"Configuration management using JSON files."),n(),t(44,"li"),e(45,"Preprocessing and tokenization of input text."),n(),t(46,"li"),e(47,"Generation of summaries using beam search and top-k sampling."),n()()(),t(48,"section",4)(49,"h2"),e(50,"Project Components"),n(),t(51,"div",5)(52,"h3"),e(53,"Grid Search for Hyperparameters"),n(),t(54,"p"),e(55,"Tuning: Optimize T5 model performance by tuning hyperparameters like max_length, min_length, num_beams, etc."),n(),t(56,"pre")(57,"code",6),e(58,`
                  # Example of grid search parameters
                  max_lengths = [150, 175, 200, 350]
                  min_lengths = [50, 75, 100, 150]
                  num_beams = [2, 4, 6, 8]
                  length_penalties = [0.8, 1.0, 1.2, 1.5]
                  top_ks = [30, 50, 70, 90]
                  top_ps = [0.8, 0.9, 1.0, 1.1]
                  repetition_penalties = [1.0, 1.2, 1.5, 2.0]
                `),n()(),t(59,"p"),e(60,"Visual: Add a table or chart showing the top-performing hyperparameter combinations (e.g., from sorted_grid_search_results.csv)."),n()(),t(61,"div",5)(62,"h3"),e(63,"Configuration Management"),n(),t(64,"p"),e(65,"Hyperparameter settings across runs using a JSON configuration file."),n(),t(66,"pre")(67,"code",7),e(68,`
                  {
                  "model_name": "t5-base",
                  "max_length": 175,
                  "min_length": 75,
                  "num_beams": 6,
                  "length_penalty": 0.8,
                  "top_k": 70,
                  "top_p": 0.9,
                  "repetition_penalty": 1.2
                  }
                `),n()(),t(69,"p"),e(70,"Visual: Add a screenshot of the config.json file or a diagram showing how the configuration is used in the pipeline."),n()(),t(71,"div",5)(72,"h3"),e(73,"Note Formatting Pipeline"),n(),t(74,"p"),e(75,"Preprocess input text, tokenize, generates summaries, and evaluates quality using ROUGE, BLEU, and METEOR scores."),n(),t(76,"pre")(77,"code",6),e(78,`
          def simplify_notes(text):
              input_text = "summarize the following technical notes in detail: " + text
              inputs = tokenizer.encode(input_text, return_tensors="pt", max_length=512, truncation=True)
              summary_ids = model.generate(inputs, max_length=config["max_length"], min_length=config["min_length"], num_beams=config["num_beams"], early_stopping=True)
              summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
              return summary
                `),n()(),t(79,"p"),e(80,"Visual: Add before-and-after examples of input text and generated summaries (e.g., input_notes.txt vs. out_notes.txt)."),n()(),t(81,"div",5)(82,"h3"),e(83,"REST API for Summarization"),n(),t(84,"p"),e(85,"Exposes the summarization functionality via a Flask API."),n(),t(86,"pre")(87,"code",6),e(88,`
                  @app.route('/summarize', methods=['POST'])
                  def summarize():
                  data = request.json
                  text = data.get('text', '')
                  summary = simplify_notes(text)
                  return jsonify({"summary": summary})
                `),n()(),t(89,"p"),e(90,"Visual: Add a screenshot of a sample API request/response using tools like Postman or cURL."),n()()(),t(91,"section",8)(92,"h2"),e(93,"Approach & Process"),n(),t(94,"ol")(95,"li"),e(96,"Define key hyperparameters in config.json. "),t(97,"p"),e(98,"Visual: Add a diagram or flowchart showing the hyperparameter tuning process."),n()(),t(99,"li"),e(100,"Preprocess input text and tokenize it. "),t(101,"p"),e(102,"Visual: Add an image of the input text and tokenized output."),n()(),t(103,"li"),e(104,"Generate summaries using beam search & top-k sampling. "),t(105,"p"),e(106,"Visual: Add a diagram or screenshot of the beam search process."),n()(),t(107,"li"),e(108,"Compute evaluation metrics (ROUGE, BLEU, METEOR). "),t(109,"p"),e(110,"Visual: Add a table or chart showing the evaluation scores."),n()(),t(111,"li"),e(112,"Store and analyze results in sorted_grid_search_results.csv. "),t(113,"p"),e(114,"Visual: Add a sample of the CSV file or a chart showing the top results."),n()()()(),t(115,"section",9)(116,"h2"),e(117,"Results"),n(),t(118,"p")(119,"strong"),e(120,"Sample Input:"),n()(),t(121,"pre")(122,"code"),e(123,"Full Stack Developer with over 4 years of professional experience..."),n()(),t(124,"p")(125,"strong"),e(126,"Generated Summary:"),n()(),t(127,"pre")(128,"code"),e(129,"Full Stack Developer with over 4 years of experience. Holds a Bachelor of Science in Computer Information Systems. Currently pursuing a Master\u2019s in AI & Machine Learning."),n()(),t(130,"h3"),e(131,"Performance Metrics:"),n(),t(132,"table")(133,"thead")(134,"tr")(135,"th"),e(136,"Metric"),n(),t(137,"th"),e(138,"Score"),n()()(),t(139,"tbody")(140,"tr")(141,"td"),e(142,"ROUGE-1"),n(),t(143,"td"),e(144,"0.618"),n()(),t(145,"tr")(146,"td"),e(147,"BLEU"),n(),t(148,"td"),e(149,"25.75"),n()(),t(150,"tr")(151,"td"),e(152,"METEOR"),n(),t(153,"td"),e(154,"0.60"),n()()()()(),t(155,"section",10)(156,"h2"),e(157,"Lessons Learned"),n(),t(158,"ul")(159,"li")(160,"strong"),e(161,"Hyperparameter tuning significantly impacts summary quality."),n(),t(162,"p"),e(163," Fine-tuning hyperparameters such as max_length, min_length, and num_beams is crucial for optimizing the performance of the T5 model."),n()(),t(164,"li")(165,"strong"),e(166,"Longer summaries can introduce unnecessary repetition."),n(),t(167,"p"),e(168," Setting a high max_length can lead to repetitive content in the generated summaries. Adjusting the length_penalty can help mitigate this issue."),n()(),t(169,"li")(170,"strong"),e(171,"The model struggles with very short summaries, requiring fine-tuned length penalties."),n(),t(172,"p"),e(173," Very short summaries often result in hallucinations or irrelevant content. Careful tuning of min_length and length_penalty is necessary to avoid this."),n()(),t(174,"li")(175,"strong"),e(176,"Custom model and larger dataset for better notes."),n(),t(177,"p"),e(178," Creating a custom model and using a larger, more diverse dataset can improve the quality and relevance of the generated summaries."),n()(),t(179,"li")(180,"strong"),e(181,"Short notes with high max_length can produce gibberish."),n(),t(182,"p"),e(183," When input notes are significantly shorter than the max_length, the model tends to generate irrelevant or nonsensical text. Ensuring the max_length is proportionate to the input length can help prevent this."),n()()()(),t(184,"section",11)(185,"h2"),e(186,"Future Work"),n(),t(187,"ul")(188,"li"),e(189,"Create a custom model for better performance."),n(),t(190,"li"),e(191,"Build a larger dataset for improved results."),n(),t(192,"li"),e(193,"Handle edge cases (e.g., very short or very long input text)."),n(),t(194,"li"),e(195,"Improve preprocessing techniques to reduce noise in the input data."),n(),t(196,"li"),e(197,"Experiment with different model architectures and hyperparameters.."),n(),t(198,"li"),e(199,"Implement automated evaluation and monitoring of model performance.."),n(),t(200,"li"),e(201,"https://huggingface.co/learn/nlp-course/en/chapter7/5?utm_source=chatgpt.com."),n()()()())}})};export{l as AiSummarizerComponent};
