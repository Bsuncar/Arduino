void setup() {
 serial.begin(9600);

}

void loop() {
  int sensorValue = analogRead(A0);
  serial.println(sensorValue);delay(10);
  delay(10);
}
