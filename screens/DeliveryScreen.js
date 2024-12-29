import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import { Modalize } from "react-native-modalize";

const DeliveryScreen = () => {
  const mapRef = useRef(null);
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const chennaiCentral = { latitude: 13.08268, longitude: 80.270718 };
  const annaLibrary = { latitude: 13.010257, longitude: 80.234372 };

  const curvePoints = [
    chennaiCentral,
    { latitude: 13.05, longitude: 80.26 },
    { latitude: 13.03, longitude: 80.24 },
    annaLibrary,
  ];

  const centerMap = () => {
    mapRef.current?.fitToCoordinates(curvePoints, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: true,
    });
  };

  const openModal = () => {
    modalRef.current?.open();
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.open();
    }
  }, [isModalOpen]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 13.046,
          longitude: 80.252,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={chennaiCentral}
          title="Chennai Central"
          description="Chennai Central Railway Station"
        >
          <Callout>
            <View>
              <Text style={styles.calloutTitle}>Chennai Central</Text>
              <Text style={styles.calloutDescription}>
                Chennai Central Railway Station
              </Text>
            </View>
          </Callout>
        </Marker>

        <Marker
          coordinate={annaLibrary}
          title="Anna Library"
          description="Anna Centenary Library"
        >
          <Callout>
            <View>
              <Text style={styles.calloutTitle}>Anna Library</Text>
              <Text style={styles.calloutDescription}>
                Anna Centenary Library
              </Text>
            </View>
          </Callout>
        </Marker>

        <Polyline
          coordinates={curvePoints}
          strokeColor="#1E90FF"
          strokeWidth={4}
        />
      </MapView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.relocateButton} onPress={centerMap}>
          <Text style={styles.relocateText}>Relocate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsButton} onPress={openModal}>
          <Text style={styles.detailsText}>Delivery Status</Text>
        </TouchableOpacity>
      </View>

      <Modalize
        ref={modalRef}
        modalHeight={300}
        handlePosition="outside"
        overlayStyle={styles.modalOverlay}
        handleStyle={styles.modalHandle}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Your Delivery On the way!!!</Text>
          <Text style={styles.modalText}>see you</Text>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => modalRef.current?.close()}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  calloutTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  calloutDescription: {
    fontSize: 14,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  relocateButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    flex: 1,
    marginRight: 5,
  },
  detailsButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    flex: 1,
    marginLeft: 5,
  },
  relocateText: {
    color: "white",
    fontSize: 16,
  },
  detailsText: {
    color: "white",
    fontSize: 16,
  },
  modalOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalHandle: {
    backgroundColor: "#ccc",
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    marginTop: 20,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default DeliveryScreen;
