//bgg api https://www.boardgamegeek.com/xmlapi/boardgame/

var xmlCall = new XMLHttpRequest;
var serializer = new XMLSerializer;
var bggapi = "https://www.boardgamegeek.com/xmlapi/boardgame/";
var xmloutput = document.getElementById("xmloutput");
var idList = [421, 183308, 192458, 432, 68448, 173346, 526, 65516, 172818, 202408, 178209, 188818, 191189, 196421, 119337, 22475, 8490, 140865, 31260, 161970, 12248, 25491, 1417, 149896, 175742, 1608, 137408, 118063, 186860, 191572, 156266, 174614, 174614, 10681, 10681, 24303, 37612, 814, 41541, 41541, 205637, 154825, 166372, 144864, 145553, 167400, 935, 180680, 55829, 18723, 230802, 192730, 2397, 163, 143741, 151022, 178210, 208533, 42444, 16444, 40851, 31759, 99081, 158232, 110407, 228660, 10547, 34219, 171233, 209167, 157403, 18803, 2453, 130877, 90137, 206504, 195856, 11, 6264, 50849, 173648, 173344, 131835, 137237, 181161, 158534, 203102, 149853, 155362, 38873, 153938, 192947, 172380, 172380, 5048, 5048, 171131, 1126, 822, 12903, 13301, 160814, 43443, 84876, 155426, 13, 27710, 103091, 67239, 926, 125921, 27760, 172994, 102794, 54519, 209685, 172287, 170969, 220193, 171, 23919, 145897, 161943, 815, 13672, 478, 233371, 201808, 128098, 22141, 125924, 130592, 192945, 178900, 220775, 220774, 24742, 192934, 158899, 37231, 147151, 124361, 2719, 85843, 194100, 131357, 148943, 187653, 891, 3093, 147, 122159, 192116, 163354, 5779, 59960, 125678, 150376, 193037, 26137, 156129, 162082, 15512, 194594, 153318, 39856, 36218, 171915, 104557, 40834, 2394, 23334, 9408, 158267, 13004, 181345, 226501, 194880, 45315, 59946, 66356, 177210, 163968, 168, 119804, 146388, 1334, 112686, 20582, 157, 182134, 122842, 71074, 172225, 176371, 128011, 203427, 232918, 170, 145645, 35497, 1358, 192834, 192834, 183896, 206941, 93540, 192668, 100901, 172410, 172410, 141594, 169124, 179266, 258, 258, 136063, 65244, 37904, 95103, 43570, 17025, 145501, 171273, 2921, 169255, 188793, 31621, 141430, 132251, 93537, 143693, 143782, 143782, 214898, 2266, 144761, 154476, 849, 182874, 142992, 193738, 184919, 140779, 98778, 156138, 155969, 199042, 35677, 106217, 1855, 4997, 182875, 53093, 153097, 164579, 42688, 176083, 154597, 162378, 4424, 154499, 218050, 701, 701, 119788, 154203, 202459, 169075, 2455, 63888, 4167, 265, 176494, 185589, 148949, 172505, 54043, 2452, 198447, 161965, 144468, 18946, 18946, 200147, 147721, 122515, 3699, 173649, 70323, 115105, 180867, 158747, 119472, 155802, 164354, 206244, 160851, 117959, 234669, 184151, 156689, 54735, 154892, 770, 185374, 142555, 20437, 110327, 50, 158340, 198525, 129622, 6663, 143884, 22770, 183364, 6375, 176558, 41916, 205059, 155119, 42929, 139030, 2392, 219430, 140271, 179794, 3515, 2955, 124708, 590, 206516, 41186, 173637, 32032, 66238, 23671, 43578, 172596, 36345, 899, 1927, 163413, 519, 109969, 41010, 191004, 234511, 109651, 181304, 184473, 194607, 194607, 126042, 18333, 206084, 195421, 72321, 21241, 157413, 146158, 208895, 138127, 154602, 164448, 101013, 1830, 208428, 12942, 65515, 1107, 192860, 36895, 183840, 183840, 147949, 71836, 160477, 158109, 205322, 164928, 2136, 30549, 198928, 192153, 69552, 141030, 163412, 1797, 142197, 2290, 38187, 2281, 186442, 154479, 73538, 121041, 8631, 172385, 181960, 159406, 180974, 155873, 44163, 220203, 181687, 187988, 143519, 232043, 19370, 81542, 202732, 10114, 33451, 120426, 156108, 138614, 144270, 140857, 135116, 41114, 128882, 181385, 34887, 9215, 220926, 1563, 181, 148036, 148036, 66056, 93401, 127437, 136954, 121921, 93577, 136238, 169426, 165986, 168788, 99437, 811, 9220, 91072, 168215, 199561, 194655, 194655, 33604, 140795, 2381, 372, 438, 320, 2318, 169786, 199727, 199727, 189052, 2375, 4394, 98085, 98085, 146791, 129904, 180511, 204305, 152847, 34498, 40692, 157427, 38054, 2407, 2407, 161290, 141035, 149119, 148228, 1243, 63268, 167774, 166384, 193308, 3568, 102104, 4095, 117985, 178613, 79127, 160964, 187645, 103885, 27833, 121410, 9675, 155314, 91534, 91534, 31507, 145012, 201819, 18745, 156548, 2653, 192291, 133473, 204886, 146508, 1111, 1111, 179820, 197405, 70919, 173074, 189056, 135649, 27627, 145976, 180771, 153016, 95386, 167791, 97903, 3562, 4355, 130004, 191963, 9209, 9209, 106637, 106645, 14996, 205125, 202670, 34127, 54, 173156, 145189, 5455, 123540, 216072, 210900, 24827, 43174, 148319, 157001, 175293, 8400, 182189, 163068, 122377, 2952, 74098, 4790, 73439, 16992, 128063, 2265, 38159, 152867, 216091, 216091, 24779, 8177, 9583, 178570, 1515, 93541, 164891, 170561, 175223, 170416, 187377, 158316, 158316, 194690, 136249, 178892, 19, 155464, 174345, 191301, 99120, 146418, 195043, 150312, 925, 219215, 27826, 128016, 10582, 137095, 5856, 179217, 208480, 147030, 163937, 178336, 2243, 2243, 2243, 134618, 144826, 29387, 27588];
// var idoutput = document.getElementById("idList"); ended up grabbing the IDs in python

xmlCall.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) {
        var xmlObject = xmlCall.responseXML;
        var fixedXML = serializer.serializeToString(xmlObject);
        xmloutput.value += fixedXML;
    }
}

var i = 0;
function getContent() {
    /*for (var i = 0; i < idList.length; i++) {
        setTimeout( function() { 
            console.log(i);//xmlCall.open('GET', bggapi + idList[0], true);
            //xmlCall.send();
        }, 1700*i);
        
    }*/
}
/*
    got em
    end result is some for / while ? loop that ends with
    hmm I might be stuck at the same problem where I can't regex out xml IDs here... maybe python? python console?
    xmloutput.innerHTML += callResponse;

    ??????

    3:44 AM hey guess what, it's still not possible to do because javascript loops are too fast
    and it's not possible to slow them down using setTimeout because then .onreadystatechange
    no longer interacts with your xhttp request lol
*/


//verify page load
$( document ).ready( function(data) { console.log(idList.length); } );