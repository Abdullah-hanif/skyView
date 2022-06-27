import { TouchableOpacity, ScrollView, StyleSheet, Text, View, Image, ImageBackground, ScrollViewComponent, ScrollViewBase } from 'react-native'
import React from 'react'


const Index = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header} >
                <ImageBackground source={require('../../../assets/Ellipse-headerBG.png')} style={{ width: 130, height: 130 }} />
                <View style={{ position: 'absolute', marginTop: 85, justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center' }}>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: '5%', position: 'absolute', marginTop: '15%' }}>
                <TouchableOpacity>
                    <Image source={require('../../../assets/drwaerIcon.png')} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 30, color: 'white', paddingLeft: '10%', height: '100%' }}>Hi,Shophia</Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../../assets/alert.png')} style={{ marginLeft: '45%', width: 30, height: 35 }} />
                </TouchableOpacity>
            </View>
            {/* foooooter */}
            <View style={{ backgroundColor: 'white', flex: 1,height:'100%', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
                <View style={{ width: '95%', height: '100%', alignSelf: 'center', marginTop: '5%' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Image source={require('../../../assets/slider.png')} style={{}} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F9F6EE', width: '100%', marginTop: 10, height: '7%', borderRadius: 10, paddingTop: 10 }}>
                        <Image source={require('../../../assets/speakAlert.png')} style={{ width: 20, height: 20 }} />
                        <Text>Risk Reminders on preventing Fraud in the Name of ZB</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/refreral.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/bot.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/staking.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/community.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={{}}>
                            <Image source={require('../../../assets/tradingImage.png')} />
                        </TouchableOpacity>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>Ranking List</Text>
                                <Image source={require('../../../assets/gainer.png')} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#F9F6EE'}}>
                            <ScrollView>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Image source={require('../../../assets/BTC.png')} />
                                    <View>
                                        <Text style={{ fontWeight: '600' }}>Bitcoin</Text>
                                        <Text style={{ color: 'grey' }}>BTC</Text>
                                    </View>
                                    <View>
                                        <Text>360.25$</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'green' }}>+0.85%</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        marginTop: 2.5
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Image source={require('../../../assets/BTC.png')} />
                                    <View>
                                        <Text style={{ fontWeight: '600' }}>Bitcoin</Text>
                                        <Text style={{ color: 'grey' }}>BTC</Text>
                                    </View>
                                    <View>
                                        <Text>360.25$</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'green' }}>+0.85%</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        marginTop: 2.5
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Image source={require('../../../assets/BTC.png')} />
                                    <View>
                                        <Text style={{ fontWeight: '600' }}>Bitcoin</Text>
                                        <Text style={{ color: 'grey' }}>BTC</Text>
                                    </View>
                                    <View>
                                        <Text>360.25$</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'green' }}>+0.85%</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        marginTop: 2.5
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Image source={require('../../../assets/BTC.png')} />
                                    <View>
                                        <Text style={{ fontWeight: '600' }}>Bitcoin</Text>
                                        <Text style={{ color: 'grey' }}>BTC</Text>
                                    </View>
                                    <View>
                                        <Text>360.25$</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'green' }}>+0.85%</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        marginTop: 2.5
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Image source={require('../../../assets/BTC.png')} />
                                    <View>
                                        <Text style={{ fontWeight: '600' }}>Bitcoin</Text>
                                        <Text style={{ color: 'grey' }}>BTC</Text>
                                    </View>
                                    <View>
                                        <Text>360.25$</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'green' }}>+0.85%</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        marginTop: 2.5
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Image source={require('../../../assets/BTC.png')} />
                                    <View>
                                        <Text style={{ fontWeight: '600' }}>Bitcoin</Text>
                                        <Text style={{ color: 'grey' }}>BTC</Text>
                                    </View>
                                    <View>
                                        <Text>360.25$</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'green' }}>+0.85%</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        marginTop: 2.5
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Image source={require('../../../assets/BTC.png')} />
                                    <View>
                                        <Text style={{ fontWeight: '600' }}>Bitcoin</Text>
                                        <Text style={{ color: 'grey' }}>BTC</Text>
                                    </View>
                                    <View>
                                        <Text>360.25$</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'green' }}>+0.85%</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        marginTop: 2
                                    }}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                    <Image source={require('../../../assets/BTC.png')} />
                                    <View>
                                        <Text style={{ fontWeight: '600' }}>Bitcoin</Text>
                                        <Text style={{ color: 'grey' }}>BTC</Text>
                                    </View>
                                    <View>
                                        <Text>360.25$</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: 'green' }}>+0.85%</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: StyleSheet.hairlineWidth,
                                        marginTop: 2.5
                                    }}
                                />
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#4D1260",
        flex: 1
    },
})