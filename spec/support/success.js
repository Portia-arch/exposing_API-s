const success = (visitorId, name, ass_name, age, time, date, comments) =>
    `html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        <link rel="stylesheet" href="/views/style.css">
        title Document
    body
    
   
h1
  | Thank you #{name}. Your details have been logged!!!
  br
  | This is what we got...

  p Visitor Id: #{visitorId}
  p Name: #{name}
  p Assistant's Name: #{ass_name}
  p Visitor's Age: #{age}
  p Time: #{time}
  p Date: #{date}
  p Comment: #{comment}
  `

module.exports = success;