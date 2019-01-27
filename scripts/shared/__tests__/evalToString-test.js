/**
* An Example Class to use for the submission using HTTP API you
can perform * your own validations into this Class For username,
password,To,
* From, type, message, server
**/ public class
Sen der {
// Username that is to be used for submission
String username;
// password that is to be used along with username
String password;
// Message content that is to be transmitted
String message;
/**
* What type of the message that is to be sent *

*0:means plain text
* 1:means flash
* 2:means Unicode (Message content should be in Hex)
* 6:means Unicode Flash (Message content should be in Hex)
*
*/

/**
* To which mobile number to be sent ,for submitting more than one
number at once should be comma separated
Like
* xxxxxxx,xxxxxxx */ String To;
// Sender name to be used
String From;
// To what server you need to connect
String server;

public Sender(String server,String username, String password,
String message, String dlr, String type, String To, String From)
{this.username = username; this.password = password;
this.message = message; this.type = type; this.To = To;
this.From = From; this.server = server
; this.port = port;
}
private void submitMessage() {
try {
// Url that will be called to submit the message URL
sendUrl
= new URL("http://" + this.server + ":" + this.port
+ "/bulksms/bulksms");
HttpURLConnection httpConnection = (HttpURLConnection)
sendUrl
.openConnection();
// This method sets the method type to POST so that
// will be send as a POST request
httpConnection.setRequestMethod("POST");
// This method is set as true which we intend to send
// input to the server httpConnection.setDoInput(true);
// This method implies that we intend to receive data from
server. httpConnection.setDoOutput(true); // Implies do not
use cached data httpConnection.setUseCaches(false); // Data
that will be sent over the stream to the server.
new DataOutputStream(
DataOutputStream dataStreamToServer =
httpConnection.getOutputStream());
dataStreamToServer.writeBytes("username="
+ URLEncoder.encode(this.username, "UTF-8") + "&password="
+ URLEncoder.encode(this.password, "UTF-8") + "&type="
+ URLEncoder.encode(this.dlr, "UTF-8") + "&To="
+ URLEncoder.encode(this.To, "UTF-8") + "&From="
+ URLEncoder.encode(this.From, "UTF-8") + "&message=" +
URLEncoder.encode(this.message, "UTF-8"));
dataStreamToServer.flush(); dataStreamToServer.close();
// Here take the output value of the server.
BufferedReader dataStreamFromUrl
= new BufferedReader( new InputStreamReader(httpC
onnection.getInputStream()));
String dataFromUrl = "", dataBuffer = "";
// Writing information from the stream to
the buffer while ((dataBuffer =
dataStreamFromUrl.readLine()) != null) {
dataFromUrl += dataBuffer;
}
/**
* Now dataFromUrl variable contains the Response received
from the * server so we can parse the response and process it
accordingly.
*/
dataStreamFromUrl.close();
System.out.println("Response: " + dataFromUrl); catch
(Exception ex) { ex.printStackTrace();
}
}
}
public static void main(String[] args)
{ try {
// Below example is for sending Plain text
new Sender("easysednssms.com", "tester909",
Sender s =
"test11", "test for unicode", "1", "0", "xxxxxxx",
"Update");
s.submitMessage();
// Below example is for sending unicode
new Sender("easysendsms.com", "xxxx",
Sender s1 =
"xxx", convertToUnicode("test for unicode").toString(),
"1", "1", "xxxxxxx", "Update");
s1.submitMessage();
} catch (Exception ex) {
}
}
/* *
* Below method converts the unicode to hex
value
* @param regText * @return
*/
private static StringBuffer convertToUnicode(String regText) {
char[] chars = regText.toCharArray();
StringBuffer hexString
= new StringBuffer();
For (
int i = 0; i < chars.length; i++) {
String iniHexString = Integer.toHexString((int) chars[i]); If
(iniHexString.length() == 1) iniHexString = "000" +
iniHexString;
else if (iniHexString.length() == 2)
iniHexString = "00" + iniHexString;
else if (iniHexString.length() == 3)
iniHexString = "0" + iniHexString;
hexString.append(iniHexString);
}
System.out.println(hexString); return hexString;
}
}
DELIVER
