import { StyleSheet, Text, View, SafeAreaView, StatusBar,ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { BACKGROUNDWHITE, PRIMARYCOLOR, PUREWHITE } from '../../../../Constants/Colors/Colors'
import DEFAULTSTYLES, {DEFAULTWIDTH } from '../../../../Constants/styles/styles'
import { FONTS } from '../../../../Constants/Fonts'
import EditInfo from '../../../../Components/Common/Profile/EditInfo'
import ValidationModal from '../../../../Components/Forms/LoginScreen/ValidationModal'
import { GlobalSize, fontSize } from '../../../../Constants/ResponsiveFont/ResponsiveFonts'



const EditProfile = ({ navigation }) => {

    const NameRef = useRef(null);
    const MobileRef = useRef(null);
    const AddressRef = useRef(null);
    const EmailRef = useRef(null);

    const [FullName, setFullName] = useState('Amelia')
    const [PhoneNum, setPhoneNum] = useState('8907778767')
    const [Email, setEmail] = useState('ameliacare@gmail.com')
    const [Address, setAddress] = useState('Texas, USA')
    const [Gender, setGender] = useState('Female')
    const [ImagePath, setImagePath] = useState(null)
    const [NameStatus, setNameStatus] = useState(true)
    const [EmailStatus, setEmailStatus] = useState(true)
    const [PhoneStatus, setPhoneStatus] = useState(true)
    const [AddStatus, setAddStatus] = useState(true)
    const [GenderStatus, setGenderStatus] = useState(true)
    const [ModalOpen,setModalOpen] = useState(false)

    const OnSubmit = () => {
        const isValidAddress = /^[A-Za-z1234567890,./-_()&@;:\s]{2,50}$/.test(Address);
        const isValidPhoneNumber = /^\d{10}$/.test(PhoneNum.replace(/[^\d]/g, ''));
        const isValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(Email);
        const isValidName = /^[A-Za-z\s]{2,}$/.test(FullName);

        if (!isValidName) {
            NameRef.current.focus();
            setNameStatus(false)
        } 
        else if (!isValidEmail) {
            EmailRef.current.focus();
            setEmailStatus(false)

        } 
        else if (!isValidPhoneNumber) {
            MobileRef.current.focus();
            setPhoneStatus(false)

        }
        else if (Gender == '') {
            setGenderStatus(false)
        }
        else if (!isValidAddress) {
            AddressRef.current.focus();
            setAddStatus(false)
        }else if(ImagePath == null){
            setModalOpen(true)
            setTimeout(()=>{
                setModalOpen(false)
            },1500)
        }
        else {
            navigation.navigate('Journey')
        }
    }

    return (
        <SafeAreaView style={[DEFAULTSTYLES.AndroidSafeArea,{paddingTop:0}]}>
            <StatusBar
                backgroundColor={PRIMARYCOLOR}
                barStyle={'light-content'}
                style={{ flex: 0 }} />

            <ScrollView
                style={{backgroundColor:PRIMARYCOLOR}}
                showsVerticalScrollIndicator={false} >

                <View style={styles.editView}>
                    <EditInfo
                        navigation={navigation}
                        FullName={FullName}
                        setFullName={setFullName}
                        Email={Email}
                        setEmail={setEmail}
                        PhoneNum={PhoneNum}
                        setPhoneNum={setPhoneNum}
                        Gender={Gender}
                        setGender={setGender}
                        Address={Address}
                        NameRef={NameRef}
                        ImagePath={ImagePath}
                        setImagePath={setImagePath}
                        setAddress={setAddress}
                        NameStatus={NameStatus}
                        setNameStatus={setNameStatus}
                        EmailRef={EmailRef}
                        EmailStatus={EmailStatus}
                        setEmailStatus={setEmailStatus}
                        MobileRef={MobileRef}
                        PhoneStatus={PhoneStatus}
                        setPhoneStatus={setPhoneStatus}
                        AddressRef={AddressRef}
                        AddStatus={AddStatus}
                        setAddStatus={setAddStatus}
                        GenderStatus={GenderStatus}
                        setGenderStatus={setGenderStatus}
                    />

                    <TouchableOpacity style={styles.btnView} onPress={() => OnSubmit()}>
                        <Text style={styles.textBtn}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            
            <ValidationModal
                ModalOpen={ModalOpen}
                setModalOpen={setModalOpen}
                Message={'Please upload your profile image'} />

        </SafeAreaView>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    btnView: {
        width: DEFAULTWIDTH * 0.80,
        height: DEFAULTWIDTH * 0.125,
        backgroundColor: PRIMARYCOLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: GlobalSize(25),
    },
    textBtn: {
        fontSize: fontSize(12),
        color: PUREWHITE,
        fontWeight: '700',
        fontFamily: FONTS.FontMedium,
        textAlign: 'center',
    },
    editView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: PUREWHITE
    }
})