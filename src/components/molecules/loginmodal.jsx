import LText from "../atoms/ltext";
import Text from "../atoms/text";
import TextInput from "../atoms/textinput";

const LoginModal = () => {
    return (
        <div className="h-screen w-full fixed bg-[#00000085] bg-blend-darken blur-4xl flex justify-center items-center">
            <div className="p-10 rounded-xl bg-white text-center">
                <LText className="block"> LogIn </LText>
                <Text>Welcome to Out Website.</Text>
                <TextInput name='fist_name' id='first_name' placeholder="First Name" title="First Name" />
            </div>
        </div>
    )
}

export default LoginModal;