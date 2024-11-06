
// homerooms.js
const homerooms = {
"1-CP": ["80019512", "1186363", "1221039", "1227864", "1172769", "1174881", "1184804", "1183376", "1186453", "80017866", "1065296", "1065298", "80019039", "1095815", "1173600", "80018897", "1176386", "1195712", "80017789", "80018957"],
"1-JZ": ["80019648", "1088345", "1152411", "1081577", "1064188", "80018743", "80019237", "1069761", "1076738", "80017668", "1143599", "80017620", "80017626", "1089094", "80018462", "1174160"],
"1-KH": ["1117279", "80018744", "80016980", "1172551", "1147347", "80019273", "1144878", "80019478", "80017833", "80018496", "1152336", "1215702", "1185477", "1173182", "80019057", "1201322", "1215691"],
"1-LC": ["80018963", "1146861", "1096620", "80017644", "80019145", "1116599", "80018966", "1062255", "80017994", "1184445", "1150470", "80019274", "80019458", "80018282", "80016295", "1089096", "1065103"],
"1-MA": ["1098471", "1192634", "1167386", "1122419", "1138787", "1185873", "1101470", "1072495", "80017628", "80017719", "1089895", "1185150", "1088394", "1079263", "1201499", "1215677", "1174419", "1204585", "1191293"],
"1-SJ": ["1034563", "1201882", "1174864", "80019376", "80019350", "1196135", "1070431", "80018943", "1209285", "1218639", "80017676", "1145679", "80017603", "1199933", "1117077", "80017600", "1210334", "80018069"],
"2-AT": ["1189355", "80018733", "1176081", "80018920", "80016895", "80019226", "80016919", "80017772", "1171143", "1122435", "80018959", "80016842", "80016907", "80018974", "80019535", "1148181", "80018608", "80018143", "1173816", "80017395"],
"2-JC": ["1222724", "1210063", "1064005", "1211431", "80016725", "1113793", "80016742", "80019323", "80017950", "80017670", "1205813", "1212933", "1240125", "1171148", "80018528", "1071170", "1182092", "80016122", "80018812", "80018117"],
"2-NC": ["80017363", "80019002", "80016938", "1079064", "1210513", "80016996", "1098857", "1087843", "80019113", "80016402", "80016553", "80019520", "80016677", "80018033", "1210273", "80019493", "80018771", "1189528", "80017743", "80019360", "80017015"],
"2-SF": ["1150771", "1092159", "1120507", "80019641", "1165051", "80018460", "80018366", "80019578", "1174477", "1215933", "80019539", "1099634", "1079148", "80017893", "80016787", "1171203", "80017183", "80019025", "1143176", "80018768"],
"2-SY": ["1175507", "1079067", "80018021", "80016777", "80016780", "80018818", "1204324", "1213232", "1150086", "1028375", "80019642", "80019555", "80016382", "80015430", "80018542", "80017014", "80016762", "1094010", "80018782"],
"2-ZP": ["80018348", "1140454", "1150776", "80017331", "80018805", "80016902", "1175761", "80019472", "1070556", "80019537", "80019132", "80017983", "1077731", "80016969", "80019048", "1211170", "1207349", "1213011", "80017247", "1072647"],
"3-CD": ["1187430", "80014510", "1211612", "80018950", "80019599", "80017332", "1195242", "80014945", "1176014", "80018303", "80019340", "80016739", "80016386", "1030423", "80017832", "80015138", "80018876", "1078392", "80019038", "1048651", "80018844"],
"3-DA": ["1113882", "80015232", "80018090", "1181885", "80016724", "80019543", "80018783", "1136666", "80012744", "1078101", "80018754", "1150759", "1079249", "1184452", "80016810", "80015451", "1184816", "80015086", "80017690"],
"3-JQ": ["1171858", "80017291", "80017497", "80017883", "1176082", "1184118", "1203398", "80017314", "80015089", "80015688", "1117782", "80019144", "80018986", "1099048", "1076737", "1134905", "80019199", "1202829", "80016951", "80016942"],
"3-MF": ["1214502", "80018473", "80017498", "1195101", "1182606", "80015640", "80019272", "1060466", "1202686", "80018418", "1064623", "80019156", "80016029", "1205012", "1283549", "80019308", "80015140", "80016870", "1136654", "80015746", "80019263"],
"3-MW": ["80018983", "80017640", "80017844", "80017667", "1209680", "80019355", "80018493", "80018991", "1206489", "1167822", "1280499", "80018272", "1215574", "1217099", "80016785", "80019554", "1208510", "80019452"],
"3-PC": ["1209071", "80014691", "80015450", "80018931", "80017458", "80019201", "80015314", "1216105", "80015271", "80014803", "1096876", "80017034", "80018536", "80017673", "80018922", "1102402", "80017413", "80015396", "80016731"],
"4-BF": ["1209050", "1092440", "1041804", "80016901", "1204604", "1099372", "1075980", "80016666", "80017790", "1172810", "1211905", "80019149", "80019307", "80017694", "80019341", "1214785", "80018774", "1207999", "1208728", "1209587"],
"4-BR": ["1076975", "1113544", "80019204", "1212390", "80019117", "80013563", "80014684", "1057280", "1062487", "80019613", "80019210", "80019439", "80013759", "80013214", "80013557", "80018874", "80017202", "80016688", "1201157", "1148978"],
"4-EP": ["80014566", "80018168", "80017614", "80015379", "80017338", "1116576", "1203782", "1068800", "1062122", "1174580", "1142567", "80017182", "80013428", "80013263", "80011815", "80017946", "1081550", "80016965", "80016448", "80015128"],
"4-LL": ["80013596", "1215146", "80013137", "80013306", "80016878", "80016786", "80014105", "80013509", "1214442", "80015333", "80012390", "80012561", "80018956", "1215704", "80019647", "1173173", "80013231", "1176573", "80019362", "80015958"],
"4-PG": ["80014840", "80018690", "1113868", "1215100", "1102944", "1214808", "1167321", "80016801", "80017234", "80018683", "80019105", "80018469", "80017638", "1088392", "80017793", "80015137", "1097516", "80017390", "80016659", "1225822", "80013125"],
"4-PI": ["80016757", "1148104", "1175293", "1215151", "1183334", "1213434", "80019588", "1087621", "1210453", "1215293", "80015371", "1150089", "80015249", "80015960", "80018146", "80015391", "80014237", "80016853", "1064597", "80013383"],
"4-RB": ["1122359", "80016269", "1208619", "1117617", "80017276", "1220824", "80016665", "80011718", "1220281", "80016333", "80017967", "1208113", "80015109", "1215222", "80016990", "80013198", "80016799", "1193009", "1149912", "80017609", "80019538"],
"4-TF": ["80019370", "1085758", "80017821", "80017153", "80018985", "1195658", "80017623", "1171012", "80012790", "80017039", "80013698", "80016681", "80018477", "80019618", "1066888", "1206372", "1107227", "80018775", "1204763", "1197102"],
"5-BN": ["80019225", "1198075", "80017085", "80017417", "1213992", "80011980", "80014601", "1110202", "80017220", "80018875", "1094634", "80013901", "80011708", "80013329", "1202537", "1077053", "1202875", "1173187", "1191059", "1211307", "80015657"],
"5-CC": ["80019640", "80011602", "80019351", "80018459", "1209675", "1150092", "80019220", "80015386", "80017166", "1203245", "80011536", "1205501", "1142504", "1121537", "80014589", "1078998", "80017082", "1217801", "1189380", "1182356", "1165388"],
"5-CS": ["80019471", "80017025", "80016848", "80013138", "80016409", "1208851", "80011394", "80012761", "80018750", "80011525", "80019427", "1195640", "80018456", "1214133", "1146596", "1221938", "80017653", "80017402", "1147234", "80018633"],
"5-RC": ["1072374", "1212646", "80015079", "80015484", "1215893", "80013099", "80019112", "1201959", "1217950", "1113815", "80019477", "80014831", "1164466", "1182089", "1062952", "80013533", "80013429", "80019579", "80015075", "80018254", "80013485"],
//"5-RC": ["1222722", "1227863", "1209141", "1206627", "1166429", "1070274", "1214402", "1220833", "80016556", "1076476", "80016746", "80014002", "80018494", "80015691", "80016129", "1182676", "1058903", "80017248", "80016740", "1062179", "80017697"],
"5-TC": ["1117697", "80013112", "80011658", "1210559", "1203223", "80013153", "80017310", "80016727", "80017830", "1191868", "1089942", "80018789", "1065667", "1175292", "80015894", "1203014", "1280497", "80013140", "80011894", "1212012", "80013154"],
"5-TR": ["80017453", "1209681", "80011604", "1211606", "1176763", "80015332", "1204258", "1218602", "80016028", "80016385", "80013665", "80019320", "1145475", "80013534", "80013135", "80017645", "1204794", "80018472", "80013359", "1108962", "1182636"],
"5-WQ": ["80018555", "1192122", "1211241", "1097357", "80011966", "1150247", "80017041", "1215430", "80017275", "1186343", "80010806", "80019064", "80016911", "1206911", "80017139", "80011566", "80019553", "80012870", "1213545", "80018688"],
"EY2-EL": ["1171318", "1215870", "1225020", "1175582", "1193365", "1175324", "1205935", "1216766", "1208608", "1175865", "1175758", "1201142"],
"EY3-JH": ["1175861", "1222709", "1176061", "1212212", "1175319", "1152486", "1117600", "1150424", "1166036", "1219797"],
"EY3-KB": ["1222587", "1289852", "1171295", "1212224", "1150787", "1146888", "1184448", "1177961", "1267761", "1148350", "1192804", "1175369", "1194213"],
"EY3-LT": ["1189534", "1203371", "1213003", "1169348", "1175388", "1174301", "1197304", "1171737", "1151561", "1205656"],
"EY4-CM": ["1212608", "1211434", "1204607", "1104542", "1186091", "1068207", "1091649", "1209437", "1212428", "1280503", "1197214", "1221028", "1147107", "1087273"],
"EY4-HS": ["1203400", "1202269", "1184124", "1219078", "1186065", "1212528", "1195696", "1107828", "1103971", "1098397", "1212724", "1093387", "1211493", "1211614"],
"EY4-JZ": ["1076855", "1184842", "1089984", "1097514", "1093764", "1054154", "80019661", "1064629", "1174433", "80019570", "1075031", "1064057", "1069718"],
"EY4-KA": ["80019631", "1170328", "1175844", "1046576", "1067819", "1078094", "1064112", "1065940", "80019660", "1097353", "1076889", "80019616", "80019571", "1172845", "80019607"],
"KG-LW": ["1209826", "1102746", "1113883", "1167415", "1212473", "1201803", "1149426", "1225804", "1197643", "1079167", "80018842", "80018884", "1217703", "1165366", "1182999", "80018726", "80018802"],
"KG-MA": ["1188162", "1188592", "1186518", "1150778", "1076740", "1145591", "80018839", "1086927", "1075359", "80018716", "80018672", "1081324", "80019371", "1147193", "80018988", "80018832", "1112975", "1151692", "1170451"],
"KG-SJ": ["1201594", "1165851", "1175801", "1194112", "1071137", "1206481", "1184119", "1207401", "1214904", "1202094", "1200322", "80018821", "1145509", "1215776", "80018843", "80018813", "1212177"],
"KG-SP": ["1194128", "1175592", "1089949", "1203732", "1204244", "1080511", "1201941", "1216080", "1205624", "1186399", "1208805", "1182858", "1210267", "1208949", "1225375", "1197001", "1215258", "1201868"],
"KG-VP": ["1090842", "1096201", "1106878", "80018967", "80018671", "1111626", "1220794", "1137721", "1077124", "1140881", "80019109", "1077734", "80019519", "1109606", "80018731", "1071180", "80018916"],
"LCE": ["1186408", "1101376", "1227867", "80018930", "1070813", "80019104", "1197722"],
};

module.exports = homerooms;
