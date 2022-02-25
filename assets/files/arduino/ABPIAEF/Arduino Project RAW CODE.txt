int irmotionPin = 4;  // Pin of IR Motion Sensor
int relayPin = 8;  // Pin of Relay Module

void setup(){
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);  // Set Pin connected to Relay as an OUTPUT
  digitalWrite(relayPin, LOW);  // Set Pin to LOW to turn Relay OFF
}

void loop(){
  
  while (digitalRead(irmotionPin) == HIGH) {  // If Motion detected 
       digitalWrite(relayPin, HIGH);  // Turn Relay ON
       Serial.println("Relay is ON");
       delay(500);
}

       digitalWrite(relayPin, LOW);  // Turn Relay OFF
       Serial.println("Relay is OFF");
       delay(500);
}