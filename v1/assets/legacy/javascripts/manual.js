var manual=manual||{};manual.geral=function(){"use strict";function e(){t(),i(),n()}function t(){if(window.location.pathname.split("/")[3]){var e=a.camelCase(window.location.pathname.split("/")[3]);manual[e]?manual[e].init():null}}function i(){$('a[href="'+window.location.pathname.replace(/\/$/,"")+'"]',"nav").addClass("active")}function n(){prettyPrint(),$("pre.prettyprintCode").each(function(){var e=$(this).html();$(this).text(e).addClass("prettyprint"),prettyPrint()})}var a=function(){function e(e){return e.toLowerCase().replace(/-(.)/g,function(e,t){return t.toUpperCase()})}return{camelCase:e}}();return{init:e}}(),$(document).ready(function(){manual.geral.init()});var manual=manual||{};manual.tourGuiado=function(){"use strict";function e(){window.setTimeout(function(){locastyle.guidedTour.init(t)},1e3)}var t={id:"tourDemo",selectors:{init:"#demo-init"},i18n:{nextBtn:"Próximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:"passo1",title:"Titulo passo 1",content:"descrição passo 1",placement:"bottom",arrowOffset:"center"},{target:"passo2",title:"Título passo 2",content:"texto passo 2.",placement:"right",arrowOffset:"center",yOffset:"center"},{target:"demo-init",title:"Título passo 3- Final",content:"texto passo 3.",placement:"right",arrowOffset:"center",yOffset:"center",showNextButton:!1}]};return{init:e}}();var manual=manual||{};manual.forms=function(){"use strict";function e(){$("#test-form-step-validate")[0]&&t(),i()}function t(){$.getScript("//cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.11.1/jquery.validate.min.js",function(){jQuery.extend(jQuery.validator.messages,{required:"Campo obrigatório."}),$(".validate").validate({errorClass:"help-inline",errorElement:"span",success:function(e){e.parent(".control-group").removeClass("error").addClass("success")},errorPlacement:function(e,t){t.parent(".control-group").addClass("error"),e.appendTo(t.parent(".control-group"))}})})}function i(){$("#manual_data").mask("99/99/9999"),$("#manual_telefone").mask("(99) 99999-999?9"),$("#manual_cpf").mask("999.999.999-99"),$("#manual_cpf2").mask("999.999.999-99",{placeholder:" "}),$("#manual_data2").mask("99/99/9999",{completed:function(){alert("Você digitou a data: "+this.val())}})}return{init:e}}(),$(document).ready(function(){manual.forms.init()});