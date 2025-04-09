import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  boxTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxMid: {
    flex: 1,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  boxBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountText: {
    marginTop: 10,
    color: "#gray",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default styles;
