
Read the pdf and use pereto principle 80/20 rules to identify types of ques used most, to give user  best of best ques for the effective preparation 
EXTRACT AS MANY AS YOU CAN BEFORE HIT LIMIT (min 300, max 600)
You are extracting MCQ questions from a Pinnacle SSC book PDF. Give priority to pereto 80/20 > rule direct ques > and then long format ques.
PDF LAYOUT: 3-column layout (Col A x=28-200, Col B x=210-398, Col C x=400-570)
KEEP: SSC CGL questions + Eduquity-based pattern (EBP) questions ONLY
SKIP: SSC Stenographer, Matriculation Level, Higher Secondary Level, Graduate Level, Selection Post
Ques & Ans: first ques start with exam sectional wise then at the end of exam section there is answers of that ques. (so beeter to avoid mixing ans)
TOPIC: ANTONYMS
QUES FORMAT in PDF:
- Ques asks: find synonym of a *BOLD/underlined* word in a sentence. (for bold word use ** to make word bold, and for underline use() so user know which one need ANTONYMS)
- 4 options (a)(b)(c)(d)
Ans format: right ans and its explanation 
KEY FACT FORMAT to build:
- Show all options with meaning
- Format: **words** — meaning | **B** — meaning | **C** — meaning | **D** — meaning
- bold word use ** to make word bold, and for underline use() so user know which one is disguise from other
- Separate entries with |
- Example: **Jovial** — happy and cheerful | **Melancholy** — sad and gloomy | **Irate** — very angry | **Serene** — calm and peaceful
EXTRACT using pdfplumber with 3-col tight bbox:
  col_a = page.within_bbox((28, 50, 200, h))
  col_b = page.within_bbox((210, 50, 398, h))
  col_c = page.within_bbox((400, 50, 570, h))
OUTPUT: A single JSON array. Each item:
["question text", "option a", "option b", "option c", "option d", "correct letter", "key fact", "ANTONYMS", "ANTONYMS"]
- No extra text, no explanation, no markdown — ONLY the raw JSON array [...] 
- Start output with [ and end with ]
