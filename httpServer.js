const http = require("http");
const fs = require("fs");

let data = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Document</title>
</head>
<body>
<p>
Porta primis convallis facilisis curabitur elementum nunc pretium sem, natoque fringilla. Accumsan, sollicitudin proin in a erat urna turpis dolor metus consectetur dictum. Eros tortor nibh imperdiet ultrices. Rhoncus dictumst non pharetra nec pretium primis pretium vel integer ac. Porta suspendisse arcu ad nostra mattis, ornare netus habitasse. Eu a netus, litora justo ultrices. Nec suspendisse vel sapien sodales et elementum urna ante id vitae. Quam dui taciti viverra consectetur elit augue non. Ipsum senectus semper id.
</p>
<p>
Placerat velit ad suscipit mus parturient ipsum. Nascetur urna parturient dapibus senectus odio sem aliquam commodo cursus gravida. Sollicitudin nascetur, montes gravida placerat. Fermentum torquent nunc lectus cum sociosqu neque conubia. Volutpat quis nunc ridiculus ultricies tincidunt velit ligula massa. Montes placerat enim semper praesent facilisis eleifend nisi taciti tristique hac natoque! Eros tempus donec sollicitudin dis sollicitudin. Eu ullamcorper.
</p>
<p>
Himenaeos torquent diam tellus tristique pretium! Nullam neque a nibh suscipit quisque varius pretium. Pulvinar hendrerit sagittis nam. Tristique platea lectus integer ipsum tellus aptent rhoncus egestas penatibus dignissim gravida. Magnis curabitur mauris penatibus phasellus aliquet proin eleifend tempus natoque faucibus commodo per! Lacus vel nisl nunc nascetur sociosqu tristique hac id et commodo libero. Leo class, natoque consequat ligula. Sapien lorem tempor elementum est nulla venenatis convallis posuere dis consequat iaculis ut. Nec posuere facilisis mus arcu nostra amet faucibus! Diam feugiat commodo sodales? Pulvinar taciti non arcu feugiat venenatis gravida sem, pharetra auctor rutrum.
</p>
<p>
Montes consectetur metus, aliquet iaculis primis tristique. Platea, eu etiam leo neque praesent odio lacinia dapibus facilisis dictum sit eget. Gravida inceptos condimentum euismod phasellus commodo vulputate porta eget dictum tortor ante viverra? Curae; id suscipit dapibus aliquam mauris viverra class lacus rhoncus nisl taciti. Volutpat leo fringilla consectetur torquent, habitant eleifend enim. Vulputate est habitasse eleifend luctus sapien dis sollicitudin! Primis penatibus, tempus platea commodo.
</p>
<p>
Ad nostra netus quisque ultricies sagittis fermentum. Urna fermentum vivamus cras elit sagittis sodales fusce sodales sit odio nam. Varius facilisi etiam dapibus facilisi etiam conubia lectus. Aliquam tempus duis vel vitae quis lacus, maecenas congue platea ac mi? Lectus convallis tempus porttitor aliquet sociis fringilla nisi malesuada ridiculus pellentesque sagittis. Suscipit, sagittis dignissim suspendisse? Semper enim nunc.
</p>
<p>
Cras ridiculus aenean pharetra cubilia vehicula. Platea sapien quam ligula primis dictumst. Blandit ad condimentum eleifend. Tellus nascetur eleifend enim curae;. Dictum hendrerit ligula per justo. Varius facilisi donec, quam ad! Tristique rutrum integer netus condimentum egestas suscipit euismod eros! Sem massa sociosqu adipiscing lacinia tincidunt commodo primis parturient lectus vivamus in vestibulum! Convallis torquent pulvinar eros magna porttitor ullamcorper arcu natoque. Facilisi consectetur tristique justo posuere aenean eros senectus luctus ut aenean ridiculus. Elit, leo dictumst senectus purus condimentum mollis neque! Convallis lacinia hendrerit.
</p>
<p>
Vitae natoque ac primis convallis lacinia in donec elementum. Cras quis sapien bibendum senectus. Phasellus nascetur imperdiet, vulputate arcu. Consectetur class molestie malesuada ridiculus egestas torquent turpis semper? Libero nullam nullam scelerisque massa. Nostra auctor class consectetur tellus ligula, justo placerat! Volutpat taciti tristique aptent tempor. Vestibulum nibh tempor penatibus felis rhoncus convallis iaculis pellentesque velit natoque justo sapien!
</p>
<p>
Primis inceptos etiam non hendrerit id? Hendrerit habitasse a erat elementum. Volutpat felis duis rhoncus nulla nunc faucibus volutpat. Integer ipsum praesent congue tortor potenti, habitasse sapien proin nibh lorem! Nibh iaculis risus accumsan laoreet elementum eu amet lorem mus in tellus. Nisi auctor ipsum eu dictumst lectus dui curae; leo semper laoreet fusce. Felis interdum class cum primis egestas tempor. Ac tristique turpis ac scelerisque maecenas eros sem. Aptent, mollis vitae iaculis. Duis lacus imperdiet porta tortor arcu!
</p>
<p>
Feugiat commodo natoque dictum commodo laoreet sed etiam. Interdum fringilla pharetra, id netus tellus vel non. Aptent integer vehicula accumsan tempor pellentesque. Luctus vel, habitasse purus. Commodo sit, vivamus potenti et interdum lacinia vitae. Erat blandit nam feugiat quam amet odio. Erat amet dictumst maecenas cum placerat faucibus? Neque lacinia leo libero curabitur proin risus elit. Facilisis ornare turpis elementum vestibulum, quis dis neque ullamcorper pulvinar urna! Etiam ligula cum fermentum at laoreet velit. Mi, pellentesque metus facilisi magna enim aliquet. Sollicitudin tempor pulvinar id orci.
</p>
<p>
Proin cum erat eros parturient velit? Quis inceptos interdum lacus praesent ullamcorper molestie ornare phasellus semper ullamcorper habitasse. Ullamcorper dapibus magnis lobortis accumsan eros suscipit platea dictumst curae; porttitor pharetra odio. Mus molestie, lacus gravida imperdiet rhoncus tristique eros quis congue sem? Rutrum elit molestie nisl varius ante. Varius inceptos ipsum nibh malesuada proin.
</p>
<p>
Natoque montes pretium lobortis fringilla ullamcorper ligula tempor habitasse faucibus. Fames convallis velit dapibus nibh quisque justo. Libero, sapien convallis nascetur. Cras luctus praesent vel nisl aptent. Auctor netus, ut dignissim rhoncus rhoncus pulvinar! Porta lacus ac tincidunt aptent vitae cum proin dictumst. Ridiculus felis parturient lacus, lectus posuere nascetur libero sagittis non ultrices augue nisi. Risus malesuada, ultricies vel quis. Cras aptent pharetra curabitur commodo magnis gravida viverra penatibus parturient cursus. Ad id lobortis placerat penatibus class eu pharetra lorem ullamcorper.
</p>
<p>
Inceptos metus nec etiam class urna aliquet tempor. Aliquam porttitor tincidunt ad. Leo pretium netus potenti cras pharetra vestibulum rutrum suspendisse rutrum. Consectetur aptent, lacus mi rhoncus. Eros fermentum platea scelerisque nam viverra. Ut mollis aliquet enim justo ad auctor. Fringilla commodo luctus litora justo, nibh phasellus ad congue arcu! Faucibus nibh elementum dui posuere turpis nibh nisi litora tincidunt nascetur natoque vehicula. Diam porttitor lacus malesuada mollis class class curae; pellentesque.
</p>
<p>
Sociosqu adipiscing massa fames nisl porta. Netus mollis habitasse curabitur at tempus hendrerit nascetur blandit commodo torquent. Dapibus eget enim hac facilisi. Lacus lacinia habitasse elementum fermentum rutrum sem praesent sapien purus! Sociosqu mollis parturient gravida magna enim habitant vestibulum dolor ornare ornare class. Imperdiet, morbi justo imperdiet et scelerisque ad gravida. Pellentesque laoreet mi sollicitudin, condimentum proin? Tincidunt cubilia odio integer felis vulputate mattis lectus urna velit accumsan eros mi. Natoque, lacinia primis magnis turpis. Orci.
</p>
<p>
Vehicula nostra fringilla proin, ad taciti porttitor. Sagittis consectetur purus viverra. Iaculis felis augue dis senectus dui. Elementum gravida scelerisque nec rhoncus lorem. Accumsan natoque, urna justo quisque senectus phasellus euismod. Primis, dictumst habitant varius dui malesuada vivamus neque ornare. Consequat eu lorem rhoncus dignissim eros est ultricies phasellus. Ad vulputate magnis congue justo malesuada feugiat pulvinar nullam dolor mus.
</p>
<p>
Congue ad, fames curabitur nisl? Nostra dui accumsan ornare dui iaculis! Risus conubia parturient semper ac, sollicitudin purus porttitor. Tempor pharetra erat donec, aliquet turpis? Blandit luctus aliquam magna nisl imperdiet ad tincidunt. Gravida primis, lorem bibendum ridiculus. Ornare ultrices luctus himenaeos lorem scelerisque luctus ornare enim quam consectetur. Integer magna tempor facilisi suscipit himenaeos placerat. Justo felis adipiscing, nibh curabitur primis? Dictum lacus potenti habitasse magnis.
</p>
<p>
Feugiat purus, himenaeos quisque nisi dui leo phasellus. Facilisi tempus vulputate turpis. Posuere vehicula imperdiet bibendum lectus sodales maecenas? Et facilisi neque integer facilisis elit amet cursus mi fames tristique. Dictum penatibus porttitor vivamus nec risus euismod nulla sed porta? Pulvinar hendrerit justo rutrum platea malesuada sed, neque pharetra! Felis volutpat odio mi eu ut fusce himenaeos magnis? Nulla lacinia lorem curae; aenean cum. Molestie sem aliquam non justo nec blandit eleifend aenean est ultricies sagittis? Hac eleifend ligula donec pulvinar augue. Dis proin viverra.
</p>
<p>
Dui faucibus habitasse curae; integer maecenas augue nostra sollicitudin fusce sit tellus in. Blandit ullamcorper montes tempus auctor ad sociosqu maecenas. Aptent lacinia senectus duis ipsum justo, lectus vulputate elementum sapien massa tempor. Ligula felis laoreet ornare facilisis fames condimentum eget. Dictum risus habitasse quisque justo sem dolor nibh mauris. Vulputate sapien semper vulputate congue pellentesque ornare aliquam magna. Praesent inceptos pharetra ullamcorper at ac nisi volutpat eros posuere feugiat. Fusce mauris?
</p>
<p>
Ultricies eros rhoncus bibendum nisi non accumsan id montes suspendisse nostra. Ipsum massa at elit lectus risus condimentum purus bibendum hendrerit nec. Pulvinar cras curae; pharetra fusce, aliquet urna tellus erat? Porta venenatis pretium ac dignissim lacinia lobortis fusce nisl donec phasellus. Elit bibendum pretium odio. Ipsum ultricies, habitant facilisi montes sapien taciti curae;. Ac odio augue risus cursus; sapien habitasse. Pharetra nascetur nam sollicitudin nunc ante dictumst mauris dictum. Bibendum diam morbi sollicitudin cum ultricies euismod lorem montes. Venenatis suspendisse per varius quam orci per convallis aptent tortor habitasse vitae in? Eu neque torquent feugiat vivamus gravida, vehicula.
</p>
<p>
Montes id ultricies iaculis ligula ipsum. Eu massa sapien magnis sem luctus. At hendrerit massa duis ornare urna in magna tortor tristique. Eleifend nunc aptent ante duis, mus nam inceptos. Tempus dictum habitant odio felis malesuada velit a auctor montes venenatis ultrices. Curae; torquent, mattis ipsum. Eleifend et dignissim porta inceptos donec quam pellentesque blandit! Suspendisse pharetra sagittis proin nibh.
</p>
<p>
Dui platea est, senectus quis consectetur? Imperdiet class malesuada eu! Dapibus senectus consequat tortor lacinia libero lobortis. Netus ac a imperdiet odio est suscipit in lectus quam gravida eleifend. Sapien tincidunt quis nisi libero nam magna cum. Quis imperdiet lorem mattis velit interdum fermentum etiam posuere himenaeos. Metus tortor quis tellus euismod. Integer egestas pharetra facilisi varius parturient ridiculus semper aliquet montes. Rhoncus auctor ullamcorper neque neque conubia posuere dictumst curabitur. Ac ornare aenean posuere orci diam semper gravida ante per vestibulum praesent faucibus. Lorem egestas fringilla ac netus vel suspendisse suspendisse montes nec magna cras. Justo.
</p>
<p>
Convallis cubilia laoreet faucibus. Accumsan phasellus sollicitudin magnis netus tempor cubilia. Mauris est molestie praesent inceptos pulvinar accumsan adipiscing. Volutpat scelerisque dapibus eu. Ornare nulla tempus quam diam sociosqu suscipit vulputate, nulla massa! Nisi purus sociis dignissim? Malesuada, felis justo sed varius magnis cursus hac donec augue magnis hac. Eu placerat cursus sodales enim rutrum nec massa, donec suspendisse feugiat pharetra. Sociis faucibus odio dui sagittis vehicula justo quisque phasellus dapibus malesuada dolor! Volutpat est montes feugiat vulputate congue sem. Pellentesque praesent donec tortor facilisi lobortis.
</p>
<p>
Dis posuere ultricies massa, curae; euismod nibh posuere. Class tincidunt habitant vel auctor magnis magna neque commodo lacinia! Varius netus eget vitae litora dictumst lorem pretium. Dis dictum nam gravida fames. Ac erat duis posuere accumsan. Magnis tempus mus taciti hac cubilia in mus lobortis volutpat sed senectus ante. Netus cum, est leo elit maecenas sagittis enim elementum. Tincidunt himenaeos integer iaculis, potenti conubia vitae. Enim metus porttitor aliquam? Morbi potenti senectus sociis lacinia odio.
</p>
<p>
Nulla accumsan sodales ipsum nostra habitant accumsan. Senectus dis habitasse leo vivamus nostra blandit platea pulvinar fringilla scelerisque praesent vehicula. Tempor mollis commodo urna! Sodales amet odio pulvinar dui. Sociosqu penatibus interdum tristique non. Dictumst metus dis ligula quis lacinia duis sit. Nam sit aenean nulla egestas posuere facilisis lacus vehicula convallis lacus. Mus fusce aptent vel natoque lobortis.
</p>
<p>
Lectus cras luctus dignissim ac dictum! Imperdiet orci tempus pellentesque faucibus quisque non maecenas porta ridiculus. Sed luctus proin lacus. Per natoque nullam praesent, curae; nisi nam nunc odio at inceptos id! Placerat imperdiet dignissim nulla viverra venenatis eget tortor nullam aptent integer! Leo leo phasellus eleifend nostra, aliquam senectus tristique volutpat etiam lectus. Vestibulum amet dis blandit convallis egestas. Fermentum eleifend feugiat venenatis suscipit. Ligula porta praesent dapibus eleifend gravida. Placerat sem lectus quis mollis accumsan odio.
</p>
<p>
Morbi scelerisque sagittis tincidunt ante metus pulvinar ante lacinia neque elit. Rhoncus diam accumsan augue ultricies suscipit pellentesque. Neque primis laoreet tempus vestibulum nec elit quis venenatis tempor elit montes. Habitasse sapien condimentum volutpat nulla dui mauris commodo adipiscing. Sollicitudin dapibus quis maecenas et aenean egestas lacinia consectetur aliquam. Himenaeos neque per tortor quis. Tempor tempus blandit a vivamus risus potenti. Ad, vehicula inceptos litora fringilla senectus etiam vulputate euismod sem urna nascetur elit. Pellentesque dapibus adipiscing nunc integer suscipit. Ante commodo dapibus metus condimentum ultrices risus.
</p>
<p>
Congue fames porttitor amet pharetra torquent rutrum neque vel lacus, consequat litora. Molestie, varius hendrerit hac. Nisi sociosqu ullamcorper nunc. Amet sodales lectus varius purus parturient velit arcu integer fames faucibus primis non? Aptent gravida vel velit diam, cras auctor sollicitudin. Est iaculis risus sociosqu hendrerit cras porta quisque eros auctor?
</p>
<p>
Ut ridiculus mauris sem porttitor lorem. Sociosqu vivamus habitant dolor integer pretium pretium adipiscing sapien tortor ullamcorper eleifend tempor? Eros netus venenatis suspendisse habitasse eu dignissim hac lorem eu cubilia? Nostra aliquet mattis mollis hendrerit curae;? Ullamcorper hendrerit senectus magnis sem interdum quis. Vehicula ut faucibus posuere maecenas fames vehicula urna! Dignissim erat rutrum posuere magnis sed natoque dignissim.
</p>
<p>
Porta nunc aptent pharetra posuere nascetur eget. Orci curae; diam sociis convallis id et rhoncus. Lacinia suscipit natoque lectus euismod, suscipit malesuada viverra velit dictumst maecenas nullam placerat. Volutpat vehicula posuere semper, sociis iaculis. Inceptos convallis sodales netus egestas. Etiam montes morbi parturient dapibus commodo. Dis accumsan interdum platea torquent fringilla interdum. Proin eleifend faucibus at pellentesque ultrices massa lobortis. Metus class nisl eleifend mus condimentum sociosqu aliquam vivamus feugiat pharetra pharetra. Euismod scelerisque ultricies adipiscing hac eleifend luctus conubia. Venenatis aliquam commodo sit pulvinar commodo.
</p>
<p>
Sed vulputate facilisi ac ad fusce feugiat. Nostra sociis eget adipiscing gravida laoreet dis leo. Per sit duis erat torquent urna mus? Convallis a ligula lorem. Mus dis massa pharetra fusce gravida ridiculus imperdiet. Pretium eleifend convallis tellus dui sagittis etiam feugiat natoque? Neque enim est et facilisis mus dictumst. Ornare posuere ut non dapibus nullam quis tellus. Erat pellentesque rutrum id turpis lorem ridiculus nulla. Tincidunt nascetur ad mattis at quisque.
</p>
<p>
Senectus eleifend pulvinar quis auctor phasellus nascetur. Velit pulvinar tellus ad. Iaculis, platea cum sociosqu euismod potenti ac et ipsum nascetur iaculis torquent risus? Nullam ut arcu lobortis, netus cursus. Fames felis pellentesque molestie curabitur et eget libero duis nostra tristique placerat per. Dictumst parturient phasellus tincidunt erat rhoncus bibendum vestibulum nunc montes penatibus class? Magnis torquent sem nibh porttitor. Parturient cubilia elementum odio mattis eget curabitur lacus hendrerit pulvinar laoreet. Vestibulum nullam placerat leo blandit mauris condimentum congue felis ac dignissim? Hac potenti.
</p>
<p>
Dolor urna sapien dui. Nisi nisi porta lorem ipsum ullamcorper purus mollis. Nam rutrum hendrerit placerat litora cursus primis interdum justo iaculis gravida. Lorem volutpat condimentum aenean. Semper volutpat felis viverra curabitur suspendisse mi praesent bibendum nibh facilisi vitae convallis. Nulla mi sapien morbi velit vehicula eleifend ut fermentum himenaeos inceptos nullam molestie. Sagittis inceptos eleifend phasellus, facilisis enim bibendum eleifend. Turpis pretium facilisi nisl blandit erat tincidunt. Fames mi condimentum duis orci. Fames nibh eros consequat ullamcorper et accumsan. Faucibus nascetur platea gravida sodales; eget hac. Nam viverra nullam ornare. Fermentum habitasse mattis taciti scelerisque.
</p>
<p>
Aliquam pellentesque fusce sed molestie dolor, mauris integer ullamcorper. Integer hac per hac. Praesent sodales condimentum conubia nulla etiam. Parturient penatibus vivamus senectus tellus id ullamcorper iaculis potenti neque cras sollicitudin. Purus neque neque feugiat per pulvinar vulputate tempus. Habitant conubia nec feugiat sed cum molestie phasellus. Phasellus; sodales in porta justo. Pulvinar leo condimentum nisl pretium ac nostra proin rutrum adipiscing sodales platea habitant. Ultricies euismod facilisis integer ad praesent. Nullam laoreet lacus.
</p>
<p>
Eu sit, auctor nullam vulputate. Aliquam magnis, penatibus eget suspendisse euismod. Condimentum ut mattis laoreet molestie ac donec cras fames habitant nam ultrices iaculis. Taciti, massa morbi habitant ullamcorper feugiat tempus cum condimentum fermentum dui sit lorem. Eget rhoncus luctus montes euismod in sagittis fringilla porttitor. Nec primis mus varius parturient curabitur pharetra nostra tempor tristique amet egestas morbi. Rhoncus dui metus orci himenaeos dignissim pharetra condimentum metus. Tempor lorem congue pellentesque a enim egestas placerat, hendrerit nunc ridiculus placerat scelerisque. Facilisi sodales luctus montes sociis tristique.
</p>
<p>
Hac ut semper et sagittis nostra accumsan iaculis blandit euismod himenaeos ad pretium? Pellentesque auctor class torquent placerat est. Nunc inceptos nec eros ac id viverra molestie sit eu cursus dignissim habitasse. Mollis metus amet quisque magna. Ipsum venenatis nec vel ipsum inceptos taciti augue mollis curabitur mollis condimentum. Orci amet mus diam taciti mollis.
</p>
<p>
Nec fermentum tempor tristique etiam nascetur felis lobortis laoreet nascetur turpis fusce. Tortor placerat ut gravida pulvinar luctus. Metus integer varius dui sit convallis ac inceptos libero aenean ligula. Nisi ac nisi mi facilisi scelerisque. Consequat ultrices dis hac tempor ante eleifend convallis mattis cum ut scelerisque. Velit fames morbi facilisi? Tempus per donec torquent accumsan ad tempus. Suspendisse cras elit!
</p>
<p>
Morbi etiam faucibus aliquam ac feugiat. Tellus ac netus non nisi. Porttitor nisi, ridiculus elementum mollis tempor. Sollicitudin vulputate habitant magna duis vestibulum convallis consectetur platea mus sapien bibendum. Nisl nibh rutrum mattis dignissim venenatis cursus morbi commodo quisque taciti faucibus libero. Donec vel facilisi vitae molestie at nostra platea magnis!
</p>
<p>
Mi himenaeos integer elit mus montes duis. Mauris rhoncus etiam fringilla magna aliquet. Fermentum scelerisque maecenas malesuada pellentesque pharetra egestas iaculis elit nisi turpis ipsum. Consectetur velit nascetur facilisis, consequat cubilia ipsum? Mus iaculis vel natoque nullam litora sollicitudin gravida dui augue ad per. Nascetur ut id elementum mattis consectetur venenatis bibendum dictumst. Orci ridiculus nullam auctor orci cubilia sapien in felis. Parturient velit hac ornare! Egestas dignissim viverra tellus venenatis hac fames.
</p>
<p>
Turpis curabitur volutpat aenean blandit iaculis primis diam senectus suspendisse imperdiet tempus turpis. Quam pulvinar purus varius amet facilisi convallis tempus mi blandit rhoncus? Molestie orci quis eros libero sit. Urna, netus cubilia pulvinar luctus proin elit aliquet. Odio in purus vehicula felis suspendisse nec posuere curae; parturient. Augue elementum pharetra semper porta morbi euismod in ut ad. Eu aliquet consequat himenaeos risus habitasse. Enim per habitant cras nascetur cras pellentesque potenti neque. Dictum sed commodo posuere pellentesque iaculis. Nulla.
</p>
<p>
Euismod ullamcorper enim molestie diam tristique lorem montes sed duis ipsum. Urna tellus nascetur facilisi accumsan class vehicula suspendisse. Est himenaeos suspendisse sit ad pulvinar. Ultricies vivamus malesuada lacus tincidunt quam mauris pulvinar quam pretium consectetur auctor sapien. Leo ac dolor quam donec risus vivamus! Tempus tristique maecenas aliquam malesuada at.
</p>
<p>
Sollicitudin aliquam lobortis porta fringilla. Vitae integer nam penatibus auctor dignissim lorem lobortis. At nostra neque rutrum duis penatibus penatibus at rutrum faucibus euismod duis? Varius tincidunt inceptos augue dignissim accumsan donec. Aenean vivamus curae; metus consequat dui libero. Habitant semper placerat egestas tristique. Tincidunt lectus nisl congue magnis, et dolor lacinia non. Faucibus dis viverra netus magnis sodales diam quam.
</p>
<p>
Cras lectus nullam posuere sem luctus? Ipsum hac bibendum dictumst arcu mauris euismod elementum. Feugiat fermentum tempus mauris. Facilisi himenaeos turpis eleifend fusce sed tortor pharetra mi ultricies. Arcu tristique elementum tempus aptent consectetur. Aliquet cras elementum enim quis nostra diam malesuada donec sagittis. Mus venenatis diam, vehicula gravida. Fringilla platea tortor blandit. Nisl ad orci himenaeos libero bibendum phasellus tincidunt luctus platea tortor ridiculus gravida.
</p>
<p>
Hac est condimentum adipiscing vel hendrerit urna ante facilisi. Et cubilia mus tincidunt in. Taciti interdum orci primis tempus consequat ridiculus neque aliquam condimentum pellentesque libero neque. Ipsum arcu nam quisque vulputate, tincidunt elementum tincidunt aenean. Nullam elit posuere sagittis litora enim sed posuere nisl platea torquent. Nascetur vehicula nisl quisque felis.
</p>
<p>
Ut et turpis aenean cras fames pellentesque consectetur. Leo vitae luctus porta diam tellus auctor vestibulum vulputate commodo curabitur donec. Senectus elit dui malesuada iaculis vitae habitant nec libero feugiat hendrerit accumsan. Pellentesque suspendisse eget magna ullamcorper vestibulum auctor id volutpat. At neque eget tortor ridiculus erat eu aenean malesuada platea quis quam feugiat. Integer sapien dolor nostra ullamcorper class varius ornare fermentum. Metus platea ac quis sed ante litora ligula. Massa primis tristique eu taciti tellus lacinia proin inceptos. Fermentum hendrerit ullamcorper nullam porta feugiat laoreet porta vitae.
</p>
<p>
Fames ante mollis sit purus! Hendrerit nam, nostra nam consectetur ad. Egestas dignissim nulla sagittis urna phasellus purus. Porttitor proin proin auctor, congue vivamus a etiam hendrerit. Aliquet dictumst a mattis nullam arcu accumsan felis sagittis rutrum enim. Mi, iaculis lectus tortor semper viverra molestie. Etiam placerat, interdum lacinia. Interdum sit morbi class mollis egestas. Cubilia aliquam euismod duis et fringilla odio dictumst. Elit adipiscing nisl mattis lorem dolor elit non ut. Eu nec diam ultricies iaculis auctor porta, nostra fringilla. Adipiscing.
</p>
<p>
Eget eget pellentesque hendrerit a at cubilia praesent neque sit. Sodales facilisi suscipit hac. Iaculis nullam, interdum convallis. Scelerisque ad ullamcorper volutpat. Sociosqu lectus nostra montes habitasse magna maecenas, per commodo metus parturient. Senectus eu feugiat ac facilisis tellus tortor iaculis ornare laoreet mauris gravida vel. Facilisi platea curabitur sem hac neque vulputate lorem. Proin aenean mattis duis phasellus ornare dignissim congue! Laoreet posuere quam rhoncus interdum facilisi elit pretium facilisi fames. Suspendisse porta suscipit bibendum quisque!
</p>
<p>
Vulputate ullamcorper volutpat cubilia habitant vitae mus odio. Cubilia mi fames sem tempor rhoncus ut consequat interdum amet habitant ultrices lobortis. Dis magna in ullamcorper eleifend ullamcorper nisl eu tempor magna. Accumsan nostra pulvinar sem donec felis! Lectus augue ante sed faucibus. Dapibus nec a dui dapibus, maecenas tincidunt feugiat cubilia nulla neque curabitur. Nascetur rutrum nullam placerat quisque ac pulvinar sodales aenean penatibus.
</p>
<p>
Urna malesuada ad nibh. Lacinia feugiat at scelerisque litora venenatis eget vel fusce turpis accumsan. Tellus eleifend vulputate libero? At platea nec curae; rutrum quis malesuada eros. Condimentum arcu morbi porttitor mollis interdum consequat sagittis class malesuada. Nascetur nisi, porta vitae varius. Phasellus volutpat cursus ultrices justo himenaeos ut semper fames laoreet enim viverra! Netus bibendum.
</p>
<p>
Ridiculus etiam sem vehicula accumsan ante auctor sollicitudin etiam risus laoreet id etiam. Elit iaculis risus cursus. Per est ultrices enim. Aenean at tincidunt a hendrerit cursus non in nulla non augue penatibus sollicitudin? Netus euismod id venenatis primis cursus. Elementum venenatis vel hac donec suspendisse felis cum semper dis tellus aenean potenti. Adipiscing interdum a suspendisse tincidunt per posuere lobortis ullamcorper lorem scelerisque quam facilisis. Curabitur nostra parturient ridiculus feugiat pellentesque sagittis pulvinar. Donec, potenti montes nec libero lobortis dolor sapien venenatis lacinia nam ac.
</p>
<p>
Litora porttitor eros ridiculus parturient curabitur interdum purus id netus viverra. Tempus lacinia dolor sociosqu metus erat tempus feugiat iaculis pretium magna venenatis. Luctus risus dapibus phasellus maecenas odio? Massa quisque himenaeos nam dictum nisl hac sed ac. Fames vel condimentum lorem congue et at turpis molestie risus! Aenean ad molestie ornare nullam nec etiam nunc venenatis congue. Sapien sit augue ipsum dictum orci ante tincidunt dignissim penatibus? Malesuada blandit habitant tristique inceptos pharetra semper in mus rutrum nascetur metus mi. Enim nam mollis.
</p>
<p>
Sed elit purus etiam primis. Penatibus primis phasellus vivamus ac cras tincidunt. Curae; interdum id inceptos placerat. Magnis feugiat ut platea nec montes hac aliquet tristique integer pharetra. Sit tincidunt laoreet ridiculus vehicula ridiculus ligula sapien maecenas maecenas. Eleifend volutpat, commodo augue. Curabitur posuere enim vivamus enim. Lorem torquent aptent tellus habitant bibendum hendrerit ullamcorper etiam cursus. Urna scelerisque porta eleifend odio. Est interdum ornare est est lacus nulla scelerisque sociis lectus phasellus vulputate. Nec fusce natoque nascetur luctus netus taciti nibh? Mi, condimentum massa phasellus sociis auctor fusce. Urna libero praesent magnis habitant commodo cubilia mi habitasse mus.
</p>
</body>
</html>`;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile("./modules/public.html", (error, data) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`<h1>Page not found</h1>`);
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/create-file") {
    fs.writeFile("./modules/public.html", data, (error) => {
      res.writeHead(201, { "Content-Type": "text/html" });
      res.end(`<h1>File created successfully!</h1>`);
    });
  } else if (req.url === "/delete-file") {
    fs.unlink("./modules/public.html", (error) => {
      if (error) {
        console.log(error);
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>File deleted successfully!</h1>`);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>Page not found</h1>`);
  }
});

server.listen(9000, () => {
  console.log("server is listening at port 9000");
});
