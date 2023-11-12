import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";


const FormLogin = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("required"),
      password: Yup.string().required("required"),
    }),
    onSubmit: () => {
      navigation.replace('Application')
    },
  });
  
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholder="phon number , username or email"
          placeholderTextColor={"#444"}
          textContentType="emailAddress"
          autoFocus={true}
          autoCapitalize="none"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
      </View>
      {formik.touched.email && formik.errors.email ?
      (<Text style={{color:"red"}}>{formik.errors.email}</Text>) : null

      }
      <View style={styles.inputField}>
        <TextInput
          placeholder="password"
          placeholderTextColor={"#444"}
          textContentType="password"
          secureTextEntry={true}
          autoCorrect={false}
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
      </View>
      {formik.touched.email && formik.errors.password ?
      (<Text style={{color:"red"}}>{formik.errors.password}</Text>) : null
      }
      <Pressable style={styles.butoon} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  inputField: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: "#fafafa",
  },
  butoon: {
    backgroundColor: "#0096f6",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 42,
    borderRadius: 4,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
