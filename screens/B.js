import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

export default function B() {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text>Cart</Text>
        </View>
        <View style={styles.view4}>
          <View style={styles.view5}>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/15def04227d786d84e6192b5565f779126ea6f74ec0c0c6b61c7291e9cddac1f?apiKey=e74318c71e1742508d004ea0189216ee&",
              }}
              style={styles.image1}
            />
            <View style={styles.view6}>
              <Text>
                Cap Size:{" "}
                <span style="font-weight: 700; color: rgba(104,104,104,1);">
                  Small
                </span>
              </Text>
            </View>
            <View style={styles.view7}>
              <Text>
                <span style="color: rgba(104,104,104,1);">Level Sugar: </span>
                <span style="font-weight: 700; color: rgba(104,104,104,1);">
                  No Sugar
                </span>
              </Text>
            </View>
          </View>
          <View style={styles.view8}>
            <View style={styles.view9}>
              <Text>Coffee</Text>
            </View>
            <View style={styles.view10}>
              <Text>With Sugar</Text>
            </View>
            <View style={styles.view11}>
              <View style={styles.view12}>
                <Text>Rp</Text>
              </View>
              <View style={styles.view13}>
                <Text>50.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.view14}>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/13ee5fc7682bb662a914b10ad17513748e1c5dd7eda8b1246eda322dde7830fc?apiKey=e74318c71e1742508d004ea0189216ee&",
              }}
              style={styles.image2}
            />
            <View style={styles.view15}>
              <View style={styles.view16}>
                <Text>2</Text>
              </View>
              <Image
                resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d6decc194191cdc3697d131ca555a10800467073d0df9fed10fc28355701d94?apiKey=e74318c71e1742508d004ea0189216ee&",
                }}
                style={styles.image3}
              />
            </View>
          </View>
        </View>
        <View style={styles.view17}>
          <View style={styles.view18}>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/15def04227d786d84e6192b5565f779126ea6f74ec0c0c6b61c7291e9cddac1f?apiKey=e74318c71e1742508d004ea0189216ee&",
              }}
              style={styles.image4}
            />
            <View style={styles.view19}>
              <Text>
                Cap Size:{" "}
                <span style="font-weight: 700; color: rgba(104,104,104,1);">
                  Small
                </span>
              </Text>
            </View>
            <View style={styles.view20}>
              <Text>
                <span style="color: rgba(104,104,104,1);">Level Sugar: </span>
                <span style="font-weight: 700; color: rgba(104,104,104,1);">
                  No Sugar
                </span>
              </Text>
            </View>
          </View>
          <View style={styles.view21}>
            <View style={styles.view22}>
              <Text>Coffee</Text>
            </View>
            <View style={styles.view23}>
              <Text>With Sugar</Text>
            </View>
            <View style={styles.view24}>
              <View style={styles.view25}>
                <Text>Rp</Text>
              </View>
              <View style={styles.view26}>
                <Text>50.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.view27}>
            <Image
              resizeMode="auto"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/13ee5fc7682bb662a914b10ad17513748e1c5dd7eda8b1246eda322dde7830fc?apiKey=e74318c71e1742508d004ea0189216ee&",
              }}
              style={styles.image5}
            />
            <View style={styles.view28}>
              <View style={styles.view29}>
                <Text>2</Text>
              </View>
              <Image
                resizeMode="auto"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d6decc194191cdc3697d131ca555a10800467073d0df9fed10fc28355701d94?apiKey=e74318c71e1742508d004ea0189216ee&",
                }}
                style={styles.image6}
              />
            </View>
          </View>
        </View>
        <View style={styles.view30}>
          <Text>
            Subtotal Rp 100.000
            <br />
            Discount Rp 25.000
            <br />
            <br />
            Total Rp 75.000
          </Text>
        </View>
        <View style={styles.view31}>
          <Text>Payment</Text>
        </View>
        <View style={styles.view32}>
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/332148742379629543855545b60119781364c28952584804c6a0caa24c819a32?apiKey=e74318c71e1742508d004ea0189216ee&",
            }}
            style={styles.image7}
          />
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8aedbe9e17ddd5670f8bdd3c9ebacf2dde244d98cc0e565c3a95333dd62b168?apiKey=e74318c71e1742508d004ea0189216ee&",
            }}
            style={styles.image8}
          />
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/02ccd6b9c60762aa624a5821334d5e7a48a40cb226f3901bf149fcce6ca91090?apiKey=e74318c71e1742508d004ea0189216ee&",
            }}
            style={styles.image9}
          />
        </View>
        <View style={styles.view33}>
          <Text>Buy</Text>
        </View>
      </View>
      <View style={styles.view34}>
        <Image
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/01827f6ab5ec5921e53d969f0da3489c9be6f195c9aaa8339bee3e4ef73b5cc6?apiKey=e74318c71e1742508d004ea0189216ee&",
          }}
          style={styles.image10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#FBFBFB",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    paddingTop: 29,
    flexDirection: "column",
    alignItems: "stretch",
    margin: "0 auto",
  },
  view2: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "0 35px",
  },
  view3: {
    color: "#000",
    font: "600 14px Montserrat, sans-serif ",
  },
  view4: {
    borderRadius: 20,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFF",
    alignSelf: "start",
    display: "flex",
    alignItems: "stretch",
    gap: 6,
    color: "#000",
    fontWeight: "600",
    margin: "26px 0 0 11px",
    padding: 6,
  },
  view5: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 14,
    color: "#686868",
    fontWeight: "400",
  },
  image1: { position: "relative", width: 144, aspectRatio: "1.37" },
  view6: {
    fontFamily: "Montserrat, sans-serif",
    marginTop: 22,
  },
  view7: {
    fontFamily: "Montserrat, sans-serif",
    marginTop: 12,
  },
  view8: {
    alignSelf: "start",
    display: "flex",
    marginTop: 26,
    flexDirection: "column",
    alignItems: "stretch",
  },
  view9: {
    font: "14px Montserrat, sans-serif ",
  },
  view10: {
    marginTop: 11,
    font: "400 10px Montserrat, sans-serif ",
  },
  view11: {
    display: "flex",
    marginTop: 8,
    alignItems: "stretch",
    gap: 2,
    whiteSpace: "nowrap",
  },
  view12: {
    flexGrow: "1",
    font: "12px Montserrat, sans-serif ",
  },
  view13: {
    font: "18px Montserrat, sans-serif ",
  },
  view14: {
    alignSelf: "end",
    display: "flex",
    marginTop: 26,
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 32,
    whiteSpace: "nowrap",
  },
  image2: {
    alignSelf: "end",
    position: "relative",
    width: 14,
    aspectRatio: "1",
  },
  view15: { display: "flex", marginTop: 86, alignItems: "stretch", gap: 20 },
  view16: {
    fontFamily: "Montserrat, sans-serif",
    margin: "auto 0",
  },
  image3: { position: "relative", width: 33, flexShrink: 0, aspectRatio: "1" },
  view17: {
    borderRadius: 20,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFF",
    alignSelf: "start",
    display: "flex",
    alignItems: "stretch",
    gap: 6,
    color: "#000",
    fontWeight: "600",
    margin: "12px 0 0 11px",
    padding: 6,
  },
  view18: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 14,
    color: "#686868",
    fontWeight: "400",
  },
  image4: { position: "relative", width: 144, aspectRatio: "1.37" },
  view19: {
    fontFamily: "Montserrat, sans-serif",
    marginTop: 22,
  },
  view20: {
    fontFamily: "Montserrat, sans-serif",
    marginTop: 12,
  },
  view21: {
    alignSelf: "start",
    display: "flex",
    marginTop: 26,
    flexDirection: "column",
    alignItems: "stretch",
  },
  view22: {
    font: "14px Montserrat, sans-serif ",
  },
  view23: {
    marginTop: 11,
    font: "400 10px Montserrat, sans-serif ",
  },
  view24: {
    display: "flex",
    marginTop: 8,
    alignItems: "stretch",
    gap: 2,
    whiteSpace: "nowrap",
  },
  view25: {
    flexGrow: "1",
    font: "12px Montserrat, sans-serif ",
  },
  view26: {
    font: "18px Montserrat, sans-serif ",
  },
  view27: {
    alignSelf: "end",
    display: "flex",
    marginTop: 26,
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 32,
    whiteSpace: "nowrap",
  },
  image5: {
    alignSelf: "end",
    position: "relative",
    width: 14,
    aspectRatio: "1",
  },
  view28: { display: "flex", marginTop: 86, alignItems: "stretch", gap: 20 },
  view29: {
    fontFamily: "Montserrat, sans-serif",
    margin: "auto 0",
  },
  image6: { position: "relative", width: 33, flexShrink: 0, aspectRatio: "1" },
  view30: {
    color: "#000",
    alignSelf: "center",
    marginTop: 40,
    font: "400 14px Montserrat, sans-serif ",
  },
  view31: {
    color: "#000",
    marginTop: 34,
    font: "600 14px Montserrat, sans-serif ",
  },
  view32: { display: "flex", marginTop: 19, alignItems: "stretch", gap: 20 },
  image7: {
    fill: "#000",
    position: "relative",
    width: 36,
    flexShrink: 0,
    aspectRatio: "1.49",
  },
  image8: {
    fill: "#000",
    position: "relative",
    width: 36,
    flexShrink: 0,
    aspectRatio: "1.49",
  },
  image9: {
    fill: "#000",
    position: "relative",
    width: 38,
    flexShrink: 0,
    aspectRatio: "1.59",
  },
  view33: {
    borderRadius: 30,
    backgroundColor: "#00512C",
    alignSelf: "start",
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    justifyContent: "center",
    margin: "24px 0 0 11px",
    padding: "10px 60px",
    font: "600 20px Montserrat, sans-serif ",
  },
  view34: {
    borderRadius: "20px 20px 0px 0px",
    boxShadow: "0px -2px 10px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFF",
    display: "flex",
    marginTop: 24,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "33px 36px",
  },
  image10: { position: "relative", width: 339, aspectRatio: "10" },
});


