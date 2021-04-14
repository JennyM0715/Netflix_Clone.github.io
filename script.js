/*******************************************************************
 * 
 * 
 *      SWTCH ENGLISH TEXT TO SPANISH TEXT JAVASCRIPT
 * 
 * 
 ******************************************************************/

  function toggleLanguage(language) {
     /***************************************
     * 
     *        /BANNER CONTAINER/
     * LANGUAGE SWTCHER, SIGN IN, SIGN UP
     * 
     * 
     ****************************************/
    let banner_container_h1 = document.getElementById("banner_container_h1");
    if (language === "Español") {
      banner_container_h1.innerHTML = "Películas, programas de TV y programas ilimitados y más.";
     
    }
    else {
      banner_container_h1.innerHTML = "Unlimited movies, TV shows, and more.";
    }
    
    let banner_container_h2 = document.getElementById("banner_container_h2");
    if (language === "Español") {
      banner_container_h2.innerHTML =  "Míralo en cualquier lugar. Cancela en cualquier momento.";
     
    }
    else {
      banner_container_h2.innerHTML = "Watch anywhere. Cancel anytime.";
    }

    let banner_container_h3 = document.getElementById("banner_container_h3");
    if (language === "Español") {
      banner_container_h3.innerHTML =  "¿Listo para mirar? Ingrese su correo electrónico para crear o reiniciar su membresía.";
     
    }
    else {
      banner_container_h3.innerHTML = "Ready to watch? Enter your email to create or restart your membership.";
    }


    let banner_container_button = document.getElementById("banner_container_button");
    if (language === "Español") {
      banner_container_button.innerHTML =  "EMPEZAR";
     
    }
    else {
      banner_container_button.innerHTML = "GET STARTED";
    }


    /*******************************
     * 
     *      /INFO_CONTAINER #1/
     *      "Enjoy on your TV"
     * 
     * 
     ********************************/
    
    let info_container_1_h1 = document.getElementById("info_container_1_h1");
    if (language === "Español") {
      info_container_1_h1.innerHTML = "Disfruta en tu TV.";
     
    }
    else {
      info_container_1_h1.innerHTML = "Enjoy on your TV.";
    }
    
    let info_container_1_h2 = document.getElementById("info_container_1_h2");
    if (language === "Español") {
      info_container_1_h2.innerHTML =  "Míralo en Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.";
     
    }
    else {
      info_container_1_h2.innerHTML = "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.";
    }


    /*******************************
     * 
     *      /INFO_CONTAINER #2/
     *      "Enjoy wherever you want."
     * 
     * 
     ********************************/
    
     let info_container_2_h1 = document.getElementById("info_container_2_h1");
     if (language === "Español") {
       info_container_2_h1.innerHTML = "Disfruta donde quieras.";
      
     }
     else {
       info_container_2_h1.innerHTML = "Enjoy wherever you want.";
     }
     
     let info_container_2_h2 = document.getElementById("info_container_2_h2");
     if (language === "Español") {
       info_container_2_h2.innerHTML =  "Películas y series ilimitadas en su teléfono, tableta, computadora y TV sin costo adicional.";
      
     }
     else {
       info_container_2_h2.innerHTML = "Unlimited movies and series on your phone, tablet, computer and TV at no extra cost.";
     }
     /*******************************
     * 
     *      /DOWNLOAD OFFLINE CONTAINER/
     *      STRANGER THINGS DOWNLOAD ANIMATION
     * 
     * 
     ********************************/

      let Stranger_Things_card_title = document.getElementById("Stranger_Things_card_title");
      if (language === "Español") {
        Stranger_Things_card_title.innerHTML = "Descarga tus programas para verlos sin conexión.";
       
      }
      else {
        Stranger_Things_card_title.innerHTML = "Download your shows to watch offline.";
      }

      let Stranger_Things_card_subtitle = document.getElementById("Stranger_Things_card_subtitle");
      if (language === "Español") {
        Stranger_Things_card_subtitle.innerHTML = "Guarde sus favoritos fácilmente y siempre tenga algo que ver.";
       
      }
      else {
        Stranger_Things_card_subtitle.innerHTML = "Save your favorites easily and always have something to watch.";
      }

      /*******************************
     * 
     *      /FAQ CONTAINER/
     *      FREQUENTLY ASKED QUESTIONS
     * 
     * 
     ********************************/

       let faq_title = document.getElementById("faq_title");
       if (language === "Español") {
        faq_title.innerHTML = "Preguntas frecuentes";
        
       }
       else {
        faq_title.innerHTML = "Frequently Asked Questions";
       }
       /*************************
        * 
        * 
        *       FAQ Q1 & A1
        * 
        ***********************/
       let faq_question_1 = document.getElementById("faq_question_1");
       if (language === "Español") {
        faq_question_1.innerHTML =  "¿Qué es Netflix?";
        
       }
       else {
        faq_question_1.innerHTML = "What is Netflix?";
       }

       let faq_question_1_answer = document.getElementById("faq_question_1_answer");
       if (language === "Español") {
        faq_question_1_answer.innerHTML = "Netflix es un servicio de transmisión que ofrece una amplia variedad de programas de televisión, películas, anime, documentales y más galardonados en miles de dispositivos conectados a Internet. Puede ver todo lo que quiera, cuando quiera sin un solo comercial, todo por un bajo precio mensual. ¡Siempre hay algo nuevo por descubrir y cada semana se agregan nuevos programas de televisión y películas!";
        
       }
       else {
        faq_question_1_answer.innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!";
       }

      /*************************
        * 
        * 
        *       FAQ Q2 & A2
        * 
        ***********************/

       let faq_question_2 = document.getElementById("faq_question_2");
       if (language === "Español") {
        faq_question_2.innerHTML =  "¿Cuánto cuesta Netflix?";
        
       }
       else {
        faq_question_2.innerHTML = "How much does Netflix cost?";
       }



       let faq_question_2_answer = document.getElementById("faq_question_2_answer");
       if (language === "Español") {
        faq_question_2_answer.innerHTML =  "Vea Netflix en su teléfono inteligente, tableta, Smart TV, computadora portátil o dispositivo de transmisión, todo por una tarifa mensual fija. Los planes oscilan entre $ 8,99 y $ 17,99 al mes. Sin costos adicionales, sin contratos.";
        
       }
       else {
        faq_question_2_answer.innerHTML = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.";
       }

       /*************************
        * 
        * 
        *       FAQ Q3 & A3
        * 
        ***********************/
       
        let faq_question_3 = document.getElementById("faq_question_3");
        if (language === "Español") {
         faq_question_3.innerHTML =  "¿Dónde puedo mirar?";
         
        }
        else {
         faq_question_3.innerHTML = "Where can I watch?";
        }
 
 
 
        let faq_question_3_answer = document.getElementById("faq_question_3_answer");
        if (language === "Español") {
         faq_question_3_answer.innerHTML =  "Mira en cualquier lugar, en cualquier momento, en una cantidad ilimitada de dispositivos. Inicie sesión con su cuenta de Netflix para mirar instantáneamente en la web en netflix.com desde su computadora personal o en cualquier dispositivo conectado a Internet que ofrezca la aplicación Netflix, incluidos televisores inteligentes, teléfonos inteligentes, tabletas, reproductores multimedia de transmisión y consolas de juegos. También puede descargar sus programas favoritos con la aplicación iOS, Android o Windows 10. Usa descargas para mirar mientras estás en movimiento y sin conexión a Internet. Lleva Netflix contigo a cualquier lugar.";
         
        }
        else {
         faq_question_3_answer.innerHTML = "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";
        }

        /*************************
        * 
        * 
        *       FAQ Q4 & A4
        * 
        ***********************/
         let faq_question_4 = document.getElementById("faq_question_4");
         if (language === "Español") {
          faq_question_4.innerHTML =  "¿Cómo cancelo?";
          
         }
         else {
          faq_question_4.innerHTML = "How do I cancel?";
         }
  
  
  
         let faq_question_4_answer = document.getElementById("faq_question_4_answer");
         if (language === "Español") {
          faq_question_4_answer.innerHTML =  "Netflix es flexible. No hay contratos molestos ni compromisos. Puede cancelar fácilmente su cuenta en línea con dos clics. No hay tarifas de cancelación: inicie o detenga su cuenta en cualquier momento.";
          
         }
         else {
          faq_question_4_answer.innerHTML = "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
         }
         /*************************
        * 
        * 
        *       FAQ Q5 & A5
        * 
        ***********************/
          let faq_question_5 = document.getElementById("faq_question_5");
          if (language === "Español") {
           faq_question_5.innerHTML =  "¿Qué puedo ver en Netflix?";
           
          }
          else {
           faq_question_5.innerHTML = "What can I watch on Netflix?";
          }
   
   
   
          let faq_question_5_answer = document.getElementById("faq_question_5_answer");
          if (language === "Español") {
           faq_question_5_answer.innerHTML =  "Netflix tiene una extensa biblioteca de largometrajes, documentales, programas de televisión, anime, originales premiados de Netflix y más. Mira todo lo que quieras, cuando quieras.";
           
          }
          else {
           faq_question_5_answer.innerHTML = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
          }

          
          /*********************************
           * 
           * 
           *    FAQ MEMBERSHIP EMAIL FORM
           * 
           * 
           *******************************/
          let faq_membership_h3 = document.getElementById("faq_membership_h3");
          if (language === "Español") {
            faq_membership_h3.innerHTML =  "¿Listo para mirar? Ingrese su correo electrónico para crear o reiniciar su membresía.";
          
          }
          else {
            faq_membership_h3.innerHTML = "Ready to watch? Enter your email to create or restart your membership.";
          }


          let faq_membership_button = document.getElementById("faq_membership_button");
          if (language === "Español") {
            faq_membership_button.innerHTML =  "EMPEZAR";
          
          }
          else {
            faq_membership_button.innerHTML = "GET STARTED";
          }
  }
